class LoginPage{
    username='[name="username"]';
    password='[name="password"]';
    loginbutton='[type="submit"]';
    errorMessage='.oxd-text.oxd-text--p.oxd-alert-content-text'



    visiit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    enterusername(username){
        cy.get(this.username).clear().type(username);
   }
   enterPassword(password){
    cy.get(this.password).clear().type(password);
   }
   clickonlogin(){
    cy.get(this.loginbutton).click();
   }
//    verifyError(expectmessage){
//     cy.get(this.errorMessage).should('have.text',expectmessage)
//    }
   verifyError(expectedMessage) {
  cy.get(this.errorMessage).should('have.text', expectedMessage);
}

}
export default new LoginPage();