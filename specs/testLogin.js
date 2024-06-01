const loginpage = require('../PageObjectModel/loginpage.js');
const constants = require('../Utilities/Constants.js');
describe('This is the describe block', function(){
    this.timeout(60000);

    before(async function() {
        await loginpage.go_to_url(constants.LOGIN_URL);
        //verify login url
        await loginpage.verifyUrl(constants.LOGIN_URL);
        await loginpage.waitTimeOut(1000);
    });

    after(async function() {
        await driver.quit();
    });

    it('Test login',async function(){
        await loginpage.Login(constants.accountName, constants.accountPassword, constants.HOMEPAGE_URL);
        //verify url after login
        await loginpage.verifyUrl(constants.HOMEPAGE_URL);
        await loginpage.waitTimeOut(3000);
    })
})