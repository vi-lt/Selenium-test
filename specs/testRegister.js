const registerpage = require('../PageObjectModel/registerpage.js');
const loginpage = require('../PageObjectModel/loginpage.js');
const constants = require('../Utilities/Constants.js');
const RandomGenerator = require('../Utilities/RandomGenerator');

const randomName = RandomGenerator.generateRandomName();
const randomId = RandomGenerator.generateRandomId();
const randomEmail = RandomGenerator.generateRandomEmail();
const randomPhone = RandomGenerator.generateRandomPhone();
describe('This is the describe block', function(){
    this.timeout(60000);

    before(async function() {
        await registerpage.go_to_url(constants.REGISTER_URL);
        //verify register url
        await registerpage.verifyUrl(constants.REGISTER_URL);
        await registerpage.waitTimeOut(1000);
    });

    after(async function() {
        await driver.quit();
    });
 
    it('Test register',async function(){
        await registerpage.clickNavigateToRegisterPage(constants.INDIVIDUAL_REGISTER_URL);
        await registerpage.inputName(randomName);
        await registerpage.waitTimeOut(1000);
        await registerpage.inputId(randomId);
        await registerpage.waitTimeOut(1000);
        await registerpage.clickCheckButton();
        await registerpage.waitTimeOut(1000);
        await registerpage.inputPassword('12345678x@X');
        await registerpage.waitTimeOut(1000);
        await registerpage.inputPasswordVerify('12345678x@X');
        await registerpage.waitTimeOut(1000);
        await registerpage.inputEmail(randomEmail);
        await registerpage.waitTimeOut(1000);
        await registerpage.inputPhone(randomPhone);
        await registerpage.waitTimeOut(1000);
        await registerpage.clickCheckBox1();
        await registerpage.waitTimeOut(1000);
        await registerpage.clickCheckBox2();
        await registerpage.waitTimeOut(1000);
        await registerpage.clickCheckBox3();
        await registerpage.waitTimeOut(1000);
        await registerpage.clickCheckBox4();
        await registerpage.waitTimeOut(1000);
        await registerpage.clickRegisterButton();
        await registerpage.waitTimeOut(10000);
        //Verify that register new account can login
        await registerpage.clickNavigateToLoginPage(constants.LOGIN_URL);
        //verify login url
        await loginpage.verifyUrl(constants.LOGIN_URL);
        await loginpage.Login(randomId, constants.accountPassword, constants.HOMEPAGE_URL);
        //verify url after login
        await loginpage.verifyUrl(constants.HOMEPAGE_URL);
        await loginpage.waitTimeOut(3000);
    })
})