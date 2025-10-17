class UserManagePage{

adminMenu='[class="oxd-text oxd-text--span oxd-main-menu-item--name"]';
userMenu=':nth-child(1)>.oxd-topbar-body-nav-tab-item';
userAddBtn='[class="oxd-button oxd-button--medium oxd-button--secondary"]'
userRoleInput=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input';
employeeNameInput=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input';
usernameInput= ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input';
statusInput=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
passwordInput='.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input';
confirmPasswordInput=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
saveBtn='.oxd-button--secondary';





    clickAdminMenu(){
        cy.get(this.adminMenu).contains('Admin').click()
    }
    clickUserMenu(){
        cy.get(this.userMenu).click();
        cy.get('.oxd-topbar-body-nav-tab-link').click()
        cy.get(this.userAddBtn).contains('Add').click();
   }  

   fillUserDetail(){
    cy.get(this.userRoleInput).click().type('e{enter}');
    cy.get(this.employeeNameInput).type('firstName{downarrow}{enter}');
    cy.get(this.usernameInput).type('manda123');
    cy.get(this.statusInput).click().type('{downarrow},{enter}');
    cy.get(this.passwordInput).type('manda@123');
    cy.get(this.confirmPasswordInput).type('manda@123');
    cy.get(this.saveBtn).click();


   }

}
export default new UserManagePage();