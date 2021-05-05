// @remove-file-on-eject
'use strict';

// exit on unhandled rejections
process.on('unhandledRejection', err => {
    throw err;
});

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spawnSync = require('cross-spawn').sync;

inquirer
    .prompt({
        type: 'confirm',
        name: 'shouldEject',
        message: 'Are you sure you want to eject? Reverting back this action is not simple!',
        default: false,
    })
    .then(answer => {
        if (!answer.shouldEject) {
            console.log(chalk.cyan('Eject aborted.'));
            return;
        }

        console.log('Ejecting...');

        const ownPath = path.resolve(__dirname, '..');
        const projectPath = fs.realpathSync(process.cwd());

console.log(ownPath)
console.log(projectPath)

        function verifyAbsent(file) {
            if (fs.existsSync(path.join(projectPath, file))) {
                console.error(
                    `\`${file}\` already exists in your app folder. We cannot `
                    + 'continue as you would lose all the changes in that file or directory. '
                    + 'Please move or delete it (maybe make a copy for backup) and run this '
                    + 'command again.',
                );
                process.exit(1);
            }
        }

        const folders = ['scripts', 'config', 'config/eslint', 'config/eslint/rules'];

        // Make shallow array of files paths
        const files = folders.reduce((files, folder) => {
            return files.concat(fs
                .readdirSync(path.join(ownPath, folder))
                // set full path
                .map(file => path.join(ownPath, folder, file))
                // omit dirs from file list
                .filter(file => fs.lstatSync(file).isFile()));
        }, []);

        // Ensure that the app folder is clean and we won't override any files
        folders.forEach(verifyAbsent);
        files.forEach(verifyAbsent);

        console.log();
        console.log(chalk.cyan(`Copying files into ${projectPath}`));

        folders.forEach(folder => {
            fs.mkdirSync(path.join(projectPath, folder));
        });

        files.forEach(file => {
            let content = fs.readFileSync(file, 'utf8');

            // Skip flagged files
            if (content.match(/\/\/ @remove-file-on-eject/)) {
                return;
            }
            content =
                content
                    // Remove dead code from .js files on eject
                    .replace(/\/\/ @remove-on-eject-begin([\s\S]*?)\/\/ @remove-on-eject-end/gm, '')
                    // Remove dead code from .applescript files on eject
                    .replace(/-- @remove-on-eject-begin([\s\S]*?)-- @remove-on-eject-end/gm, '')
                    .trim() + '\n';
            console.log(`  Adding ${chalk.cyan(file.replace(ownPath, ''))} to the project`);
            fs.writeFileSync(file.replace(ownPath, projectPath), content);
        });
        console.log();

        const ownPackage = require(path.join(ownPath, 'package.json'));
        const projectPackage = require(path.join(projectPath, 'package.json'));

        console.log(chalk.cyan('Updating the dependencies'));
        const ownPackageName = ownPackage.name;
        projectPackage.dependencies = projectPackage.dependencies || {};
        if (projectPackage.dependencies[ownPackageName]) {
            console.log(`  Removing ${chalk.cyan(ownPackageName)} from dependencies`);
            delete projectPackage.dependencies[ownPackageName];
        }
        Object.keys(ownPackage.dependencies).forEach(key => {
            // For some reason optionalDependencies end up in dependencies after install
            if (
                ownPackage.optionalDependencies &&
                ownPackage.optionalDependencies[key]
            ) {
                return;
            }
            console.log(`  Adding ${chalk.cyan(key)} to dependencies`);
            projectPackage.dependencies[key] = ownPackage.dependencies[key];
        });
        // Sort the deps
        const unsortedDependencies = projectPackage.dependencies;
        projectPackage.dependencies = {};
        Object.keys(unsortedDependencies)
            .sort()
            .forEach(key => {
                projectPackage.dependencies[key] = unsortedDependencies[key];
            });
        console.log();

        console.log(chalk.cyan('Updating the scripts'));
        delete projectPackage.scripts['eject'];
        Object.keys(projectPackage.scripts).forEach(key => {
            Object.keys(ownPackage.bin).forEach(binKey => {
                const regex = new RegExp(binKey + ' (\\w+)', 'g');
                if (!regex.test(projectPackage.scripts[key])) {
                    return;
                }
                projectPackage.scripts[key] = projectPackage.scripts[key].replace(regex, 'node scripts/$1.js');
                console.log(`  Replacing ${chalk.cyan(`"${binKey} ${key}"`)} with ${chalk.cyan(`"node scripts/${key}.js"`)}`,
                );
            });
        });

        // Write package.json file
        fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(projectPackage, null, 2) + os.EOL);
        console.log();

        // remove toolchain binaries from app node_modules
        if (ownPath.indexOf(projectPath) === 0) {
            try {
                Object.keys(ownPackage.bin).forEach(binKey => {
                    fs.removeSync(path.join(projectPath, 'node_modules', '.bin', binKey));
                });
                fs.removeSync(ownPath);
            } catch (e) {
                // It's not essential that this succeeds
            }
        }

        if (fs.existsSync(path.join(projectPath, 'yarn.lock'))) {
            const windowsCmdFilePath = path.join(projectPath, 'node_modules', '.bin', 'react-scripts.cmd');
            let windowsCmdFileContent;
            if (process.platform === 'win32') {
                // https://github.com/facebook/create-react-app/pull/3806#issuecomment-357781035
                // Yarn is diligent about cleaning up after itself, but this causes the react-scripts.cmd file
                // to be deleted while it is running. This trips Windows up after the eject completes.
                // We'll read the batch file and later "write it back" to match npm behavior.
                try {
                    windowsCmdFileContent = fs.readFileSync(windowsCmdFilePath);
                } catch (err) {
                    // If this fails we're not worse off than if we didn't try to fix it.
                }
            }

            console.log(chalk.cyan('Running yarn...'));
            spawnSync('yarnpkg', ['--cwd', process.cwd()], {stdio: 'inherit'});

            if (windowsCmdFileContent && !fs.existsSync(windowsCmdFilePath)) {
                try {
                    fs.writeFileSync(windowsCmdFilePath, windowsCmdFileContent);
                } catch (err) {
                    // If this fails we're not worse off than if we didn't try to fix it.
                }
            }
        } else {
            console.log(chalk.cyan('Running npm install...'));
            spawnSync('npm', ['install', '--loglevel', 'error'], {
                stdio: 'inherit',
            });
        }
        console.log(chalk.green('Ejected successfully!'));
        console.log();
    });
