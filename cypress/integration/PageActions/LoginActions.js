import LoginPage from "../PageObjects/LoginPage";

class LoginActions {

    enterEmail(value) {
        field.clear()
        field.type(value)
        return this
    }

}