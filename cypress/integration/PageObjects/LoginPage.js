import header from '../PageObjects/header';

class LoginPage {

    // constructor() {
    //     this.header = new Header();
    // }

    visit() {
        cy.visit("https://admin-demo.nopcommerce.com/login");
    }

    enterEmail(value) {
        const field = cy.get('[id=Email]');  //using css selector
        field.clear();
        field.type(value);

        return this;
    }

    enterPassword(value) {
        const field = cy.get('[id=Password]');  //using css selector
        field.clear();
        field.type(value);

        return this;
    }
    checkRememberMeBox() {
        const checkbox = cy.get('[id=RememberMe]');
        checkbox.click();
    }
    submit() {
        const btn = cy.get('[type=submit]');
        btn.click();
    }
    
}

export default LoginPage;