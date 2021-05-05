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
const spawn = require('cross-spawn');

module.exports = function (
    projectPath,
    projectName,
    template,
    programDirectory,
    verbose,
    useYarn,
) {
    const projectPackage = require(path.join(projectPath, 'package.json'));
    const templatePackage = template['package'] || {};

    // Keys to ignore in templatePackage
    const templatePackageIgnoreList = [
        'version',
        'scripts',
        'bundledDependencies',
        'optionalDependencies',
        'engineStrict',
        'os',
        'cpu',
        'preferGlobal',
    ];

    // Keys from templatePackage that will be merged with projectPackage
    const templatePackageToMerge = ['devDependencies', 'dependencies', 'peerDependencies'];

    // Keys from templatePackage that will be added to projectPackage, replacing any existing entries.
    const templatePackageToReplace = Object.keys(templatePackage).filter(key => {
        return !templatePackageIgnoreList.includes(key) && !templatePackageToMerge.includes(key);
    });

    // Add templatePackage keys/values to projectPackage, replacing existing entries
    templatePackageToReplace.forEach(key => {
        if (key === 'name') {
            projectPackage[key] = (templatePackage[key] || 'project-name').replace('project-name', projectName);
            return;
        }

        projectPackage[key] = templatePackage[key];
    });

    // Add templatePackage keys/value, merging with existing entries
    templatePackageToMerge
        .filter(key => projectPackage[key] && templatePackage[key])
        .forEach(key => {
            projectPackage[key] = {
                ...projectPackage[key],
                ...templatePackage[key],
            };
    });

    // Ensure 'dependencies' key order in package.json
    const tempDependencies = projectPackage.dependencies;
    delete projectPackage.dependencies;
    projectPackage.dependencies = tempDependencies;

    // Setup package scripts
    const templateScripts = templatePackage.scripts || {};
    projectPackage.scripts = Object.assign(
        {
            start: 'rollup-bundler start',
            build: 'rollup-bundler build',
            eject: 'rollup-bundler eject',
        },
        templateScripts,
    );

    // Update scripts for Yarn users
    if (useYarn) {
        projectPackage.scripts = Object.entries(projectPackage.scripts)
            .reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.replace(/(npm run |npm )/, 'yarn '),
            }), {});
    }

    fs.writeFileSync(
        path.join(projectPath, 'package.json'),
        JSON.stringify(projectPackage, null, 2) + os.EOL,
    );

    const readmeExists = fs.existsSync(path.join(projectPath, 'README.md'));
    if (readmeExists) {
        fs.renameSync(
            path.join(projectPath, 'README.md'),
            path.join(projectPath, 'README.old.md'),
        );
    }

    // Copy .rc configuration files
    const rcConfigurationFiles = [
        'gitignore',
        'rollup.config.js',
    ];
    rcConfigurationFiles.forEach(file => {
        const rcFilePath = path.resolve(__dirname, '../config/rc', file);
        if (!fs.existsSync(rcFilePath) || !fs.lstatSync(rcFilePath).isFile()) return;
        if (fs.existsSync(path.join(projectPath, file))) return;

        fs.copySync(rcFilePath, path.join(projectPath, file));
    });

    // Copy template files
    const templateDir = path.join(template['path'], 'template');
    if (fs.existsSync(templateDir)) {
        fs.copySync(templateDir, projectPath);
    } else {
        console.error(`Could not locate supplied template: ${chalk.green(templateDir)}`);
        return;
    }

    // Set .gitignore file
    const gitignoreExists = fs.existsSync(path.join(projectPath, '.gitignore'));
    if (gitignoreExists) {
        // Append if there's already a `.gitignore` file there
        const data = fs.readFileSync(path.join(projectPath, 'gitignore'));
        fs.appendFileSync(path.join(projectPath, '.gitignore'), data);
        fs.unlinkSync(path.join(projectPath, 'gitignore'));
    } else {
        // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
        // See: https://github.com/npm/npm/issues/1862
        fs.moveSync(
            path.join(projectPath, 'gitignore'),
            path.join(projectPath, '.gitignore'),
            [],
        );
    }

    let command;
    let remove;
    let args;

    if (useYarn) {
        command = 'yarnpkg';
        remove = 'remove';
        args = ['add'];
    } else {
        command = 'npm';
        remove = 'uninstall';
        args = ['install', '--save', verbose && '--verbose'].filter(e => e);
    }

    // Install additional template dependencies
    const templateDependencies = templatePackage.dependencies;
    if (templateDependencies) {
        args = args.concat(
            Object.keys(templateDependencies).map(key => {
                return `${key}@${templateDependencies[key]}`;
            }),
        );
    }

    // Install template dependencies, and react and react-dom if missing.
    if (args.length > 1) {
        console.log();
        console.log(`Installing template dependencies using ${command}...`);

        const proc = spawn.sync(command, args, {stdio: 'inherit'});
        if (proc.status !== 0) {
            console.error(`\`${command} ${args.join(' ')}\` failed`);
            return;
        }
    }

    // Remove Toolchain CLI template from dependencies
    console.log(`Removing template package using ${command}...`);
    console.log();
    const proc = spawn.sync(command, [remove, template['name']], {
        stdio: 'inherit',
    });
    if (proc.status !== 0) {
        console.error(`\`${command} ${args.join(' ')}\` failed`);
        return;
    }

    // Change displayed command to yarn instead of yarnpkg
    const displayedCommand = useYarn ? 'yarn' : 'npm';

    // print final messages
    console.log(`Success! Project ${projectName} created at ${projectPath}`);
    console.log();
    console.log('We suggest that you begin by reading README.md file. Update package.json and');
    console.log('README.md according to your project requirements.');
    console.log();
    console.log('Inside project directory, you can run:');
    console.log(chalk.cyan(`  ${displayedCommand} start`));
    console.log('    Starts the development server.');
    console.log();
    console.log(chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}build`));
    console.log('    Bundles the app into static files for production. Results are place in /build folder.');
    console.log();
    console.log(chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}eject`));
    console.log('    Removes @toolchain-js/toolchain-rollup-bundler dependency and copies configuration files');
    console.log('    and build scripts into the app directory. Reverting back this action is not simple!');
    console.log();
    console.log('Happy coding!!!');
};
