import LoginPage from "../PageObjects/LoginPage";
import testData from '../../fixtures/testData.json';
import HomePage from '../PageObjects/HomePage';

describe('Ecommerce Test Suite', () => {
    // First test case
    it('Verify Login', () => {
        const home = new HomePage();
        const lp = new LoginPage();

        lp.visit();
        cy.login(testData.email, testData.passsword);
        // lp.enterEmail(testData.email);
        // lp.enterPassword(testData.passsword);
        // lp.checkRememberMeBox();
        // lp.submit();
        cy.log('submited login credentials');
        //cy.title().should('be.equal', 'Dashboard / nopCommerce administration');
    });
    // add another test case

});