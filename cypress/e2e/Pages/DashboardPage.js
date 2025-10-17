/// <reference types="cypress" />
class DashboardPage{

dashboardHeader='.oxd-topbar-header-breadcrumb > .oxd-text';
userProfile='.oxd-userdropdown'


    verifyDashboardVisible(){
        cy.get(this.dashboardHeader).should('have.text','Dashboard')
        cy.get(this.userProfile).should('be.visible');
    }
}
export default new DashboardPage();