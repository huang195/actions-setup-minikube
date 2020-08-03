#!/usr/bin/env node
'use strict';

const errorHandler = require('./error-handler');
const checkEnvironment = require('./check-environment');
const configureEnvironment = require('./configure-environment');
const loadInputs = require('./load-inputs');
const download = require('./download');
const install = require('./install');

const run = async () => {
  checkEnvironment();
  //configureEnvironment();
  const inputs = loadInputs();
  const downloadedFile = await download(inputs);
  await install(downloadedFile, inputs);
};

process.on('unhandledRejection', errorHandler);
run().catch(errorHandler);
