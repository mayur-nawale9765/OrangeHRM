class PersonalDetailPage {
  genderMale =
    ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input";
  genderFemale =
    ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input";
  maritalStatus =
    ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input";
  saveBtn = ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button";

  selectGender(gender) {
    const index = gender.toLowerCase() === "male" ? 0 : 1;
    if (index === 0) {
      cy.get(this.genderMale).click();
    } else {
      cy.get(this.genderFemale).click();
    }
  }

  selectMaritalStatus(status) {
    cy.contains("label", "Marital Status")
      .parent()
      .find(".oxd-select-text")
      .click();

    cy.contains(this.maritalStatus, status).click();
  }
  clickOnSave() {
    cy.get(this.saveBtn).click();
  }
}
export default new PersonalDetailPage();
