class personal_details{
   genderMale =
    ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input";
  genderFemale =
    ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input";

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
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
 cy.get('.oxd-select-dropdown')
    .contains('.oxd-select-option', new RegExp(status, 'i'))
    .click()
}
  clickOnSave() {
    cy.get(this.saveBtn).click();
  }

}

export default new personal_details()
 