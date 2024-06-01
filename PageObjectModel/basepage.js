var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    //#region action
    async go_to_url(theURL){
        await driver.get(theURL);
    }

    async enterTextByXpath(xpath, searchText){
        await driver.findElement(By.xpath(xpath)).sendKeys(searchText);
    }

    async clickByXpath(xpath){
        await driver.findElement(By.xpath(xpath)).click();
    }

    async clickById(id){
        await driver.findElement(By.id(id)).click();
    }

    async pressEnter(xpath) {
        await driver.findElement(By.xpath(xpath)).sendKeys(Key.RETURN);
    }

    async refreshPage() {
        await driver.navigate().refresh();
    }

    async waitTimeOut(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    //#endregion

    //#region verify
    async VerifyElementDisplayedByXpath(xpath){
        await driver.findElement(By.xpath(xpath)).isDisplayed();
    }

    async verifyUrl(expectedUrl) {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
    }

    async verifyInputByXpath(xpath, expectedText) {
        const element = await driver.findElement(By.xpath(xpath));
        const actualText = await element.getAttribute('value');
        return actualText === expectedText;
    }
    //#endregion
}

module.exports = BasePage;