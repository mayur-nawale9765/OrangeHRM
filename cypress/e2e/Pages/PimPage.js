class PimPage {
  addBtn = ".orangehrm-header-container>.oxd-button";
  pimHeader = ".orangehrm-card-container>.oxd-text"; //Add Employee
  firstName = '[name="firstName"]';
  middleName = '[name="middleName"]';
  lastName = '[name="lastName"]';
  saveBtn = '[type="submit"]';
  verifyPersonalDetailPage = ".orangehrm-main-title";

  clickOnAddBtn() {
    cy.get(this.addBtn).click();
    cy.get(this.pimHeader).should("have.text", "Add Employee");
  }
  employeeFullName(fname1, mname, lname) {
   // cy.get(this.firstName).type(fname1);
    cy.typetext(this.firstName,fname1);
   // cy.get(this.middleName).type(mname);
   cy.typetext(this.middleName,mname);
    //cy.get(this.lastName).type(lname);
    cy.typetext(this.lastName,lname);
  }
  clickOnSaveBtn() {
    cy.get(this.saveBtn).click();
  }
  verifyPersonalDetail() {
    cy.get(this.verifyPersonalDetailPage).contains("Personal Details");
  }
}
export default new PimPage();
