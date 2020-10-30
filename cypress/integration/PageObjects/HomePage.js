import Header from './header';
import LoginPage from './LoginPage';

class HomePage {

    constructor() {
        this.header = new Header();
    }

    goToLogIn() {
        const link = this.header.getLogInLink();
        link.click();

        const logIn = new LoginPage();
        return logIn;
    }

}

export default HomePage;