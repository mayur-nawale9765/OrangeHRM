
const loginElLoc = require('../PageElement/LoginPageElement.json');

export class loginPageElements{

    userName(uname){
        cy.get(loginElLoc.loginpagelocators.username_text).type(uname)
    }

    password(pword){
        cy.get(loginElLoc.loginpagelocators.password_text).type(pword)
    }

    Loginbutton(){
        cy.get(loginElLoc.loginpagelocators.login_button).click()
    }

    
}