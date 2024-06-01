const {Key, WebDriver, until} = require('selenium-webdriver');
var BasePage = require ('./basepage.js');

class LoginPage extends BasePage{
    //#region xpath
    input_userName = '//input[@name="id"]';
    input_password = '//input[@name="password"]';
    loginButton = '//button[@type="submit"]'
    //#endregion

    //#region action
    async inputUserName(userName){
        await this.enterTextByXpath(this.input_userName, userName);
        await this.verifyInputByXpath(this.input_userName, userName);
    }

    async inputPassword(password){
        await this.enterTextByXpath(this.input_password, password);
        await this.verifyInputByXpath(this.input_password, password);
    }

     async clickLoginButton(){
        await this.clickByXpath(this.loginButton);
    }

    async Login(username, password, url) {
        await this.waitTimeOut(1000);
        for (let attempt = 0; attempt < 5; attempt++) {
            const currentURL = await driver.getCurrentUrl();
            if (currentURL !== url) {
                await this.refreshPage();
                await this.waitTimeOut(1000);
                await this.inputUserName(username);
                await this.waitTimeOut(1000);
                await this.inputPassword(password);
                await this.waitTimeOut(1000);
                await this.clickLoginButton();
                await this.waitTimeOut(3000);
            }
        }
    }       
    //#endregion
}
module.exports = new LoginPage();