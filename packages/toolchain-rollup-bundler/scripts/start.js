'use strict';

// set environment
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// exit on unhandled rejections
process.on('unhandledRejection', err => {
    throw err;
});

const rollup = require('rollup');
const chalk = require('chalk');
const clearConsole = function clearConsole() {
    process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
};
const getRollupConfig = require('../config/getRollupConfig');

getRollupConfig()
    .then(async optionsObj => {
        const bundle = await rollup.rollup(optionsObj);
        await Promise.all(optionsObj.output.map(bundle.write));
        const watcher = rollup.watch(optionsObj);

        watcher.on('event', ({code, result}) => {
            if (code === 'START') {
                clearConsole();
                console.log('Compiling...');
                console.log();
            }

            if (code === 'ERROR') {
                console.log(chalk.red('Failed to compile.'));
                console.log();
                process.exit(1);
            }

            if (code === 'END') {
                console.log();
                console.log(chalk.green('Compiled!'));
            }

            if (result) {
                result.close();
            }
        });
    });
