const {Key, WebDriver} = require('selenium-webdriver');
var BasePage = require ('./basepage.js');

class RegisterPage extends BasePage{
    //#region xpath
    registerIndividualButton = '//img[contains(@src,"register-individual")]/following-sibling::p'
    input_name = '//input[@id="name"]';
    input_id = '//input[@id="id"]';
    checkButton = '//button[contains(@class,"check")]'
    input_password = '//input[@id="password"]';
    input_passwordVerify = '//input[@id="password-verify"]';
    input_email = '//input[@id="email"]';
    input_phone = '//input[@id="phone"]';
    checkbox1 = '//label[@for="term1"]';
    checkbox2 = '//label[@for="term2"]';
    checkbox3 = '//label[@for="term3"]';
    checkbox4 = '//label[@for="term4"]';
    registerButton = '//div[contains(@class,"register_form_action")]/button[2]';
    //#endregion

    //#region action
    async clickNavigateToIndividualRegister(){
        await this.clickByXpath(this.registerIndividualButton);
    }

    async inputName(name){
        await this.enterTextByXpath(this.input_name, name);
        await this.verifyInputByXpath(this.input_name, name);
    }

    async inputId(id){
        await this.enterTextByXpath(this.input_id, id);
        await this.verifyInputByXpath(this.input_id, id);
    }

    async inputPassword(password){
        await this.enterTextByXpath(this.input_password, password);
        await this.verifyInputByXpath(this.input_password, password);
    }

    async inputPasswordVerify(passwordVerify){
        await this.enterTextByXpath(this.input_passwordVerify, passwordVerify);
        await this.verifyInputByXpath(this.input_passwordVerify, passwordVerify);
    }

    async inputEmail(email){
        await this.enterTextByXpath(this.input_email, email);
        await this.verifyInputByXpath(this.input_email, email);
    }

    async inputPhone(phone){
       await this.enterTextByXpath(this.input_phone, phone);
       await this.verifyInputByXpath(this.input_phone, phone);
    }

    async clickRegisterIndividualButton(){
        await this.clickByXpath(this.registerIndividualButton);
    }

    async clickCheckButton(){
        await this.clickByXpath(this.checkButton);
    }

    async clickCheckBox1(){
        await this.clickByXpath(this.checkbox1);
    }

    async clickCheckBox2(){
        await this.clickByXpath(this.checkbox2);
    }

    async clickCheckBox3(){
       await this.clickByXpath(this.checkbox3);
    }

    async clickCheckBox4(){
        await this.clickByXpath(this.checkbox4);
    }

    async clickRegisterButton(){
        await this.clickByXpath(this.registerButton);
    }

    async clickNavigateToRegisterPage(url) {
        for (let attempt = 0; attempt < 5; attempt++) {
            const currentURL = await driver.getCurrentUrl();
            if (currentURL !== url) {
                await this.refreshPage();
                await this.waitTimeOut(1000);
                await this.clickNavigateToIndividualRegister();
                await this.waitTimeOut(3000);
            }
        }
    }

    async clickNavigateToLoginPage(url) {
        for (let attempt = 0; attempt < 5; attempt++) {
            const currentURL = await driver.getCurrentUrl();
            if (currentURL !== url) {
                await this.refreshPage();
                await this.waitTimeOut(1000);
                await this.clickRegisterButton();
                await this.waitTimeOut(3000);
            }
        }
    }  
    //#endregion
}
module.exports = new RegisterPage();