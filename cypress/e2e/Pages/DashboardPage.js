/// <reference types="cypress" />
class DashboardPage {
  dashboardHeader = ".oxd-topbar-header-breadcrumb > .oxd-text";
  userProfile = ".oxd-userdropdown";
  pimTab = ":nth-child(2) > .oxd-main-menu-item > .oxd-text";

  verifyDashboardVisible() {
    cy.get(this.dashboardHeader).should("have.text", "Dashboard");
    cy.get(this.userProfile).should("be.visible");
  }
  clickOnPim() {
    cy.get(this.pimTab).contains("PIM").click();
  }
}
export default new DashboardPage();
