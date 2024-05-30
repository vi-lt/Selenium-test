const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example(){
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com/');
})();