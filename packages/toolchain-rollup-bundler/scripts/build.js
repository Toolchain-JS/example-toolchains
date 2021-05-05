'use strict';

// set environment
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// exit on unhandled rejections
process.on('unhandledRejection', err => {
    throw err;
});

const rollup = require('rollup');
const getRollupConfig = require('../config/getRollupConfig');

getRollupConfig()
    .then(async optionsObj => {
        const bundle = await rollup.rollup(optionsObj);
        await Promise.all(optionsObj.output.map(bundle.write));
    });
