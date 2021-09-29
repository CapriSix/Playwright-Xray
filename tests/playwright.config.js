// playwright.config.js// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */const config = {  reporter: [ ['json', { outputFile: 'results.json' }] ],};
module.exports = config;