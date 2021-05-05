'use strict';

const fs = require('fs');
const path = require('path');
const loadConfigFile = require('rollup/dist/loadConfigFile');
const createRollupConfig = require('./rollup-bundler.config');

const getRollupConfig = async function getRollupConfig() {
    const projectDirectory = fs.realpathSync(process.cwd());
    const basePath = path.relative(__dirname, projectDirectory);

    try {
        const {options} = await loadConfigFile(path.join(__dirname, basePath, 'rollup.config.js'), {format: 'es'});
        const pkg = await require(path.join(__dirname, basePath, 'package.json'));

        return createRollupConfig(path.join(__dirname, basePath), pkg, options);
    } catch (e) {
        throw e;
    }
};

module.exports = getRollupConfig;
