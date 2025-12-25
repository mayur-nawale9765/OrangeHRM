class PersonalDetailPage {
  genderMale =
    ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input";
  genderFemale =
    ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input";
//   maritalStatus =
//     ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input";
  saveBtn = ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button";

  selectGender(gender) {
    const index = gender.toLowerCase() === "male" ? 0 : 1;
    if (index === 0) {
      cy.get(this.genderMale).click();
    } else {
      cy.get(this.genderFemale).click();
    }
  }

//   selectMaritalStatus(status) {
//     cy.contains("label", "Marital Status")
//       .parent()
//       .find(".oxd-select-text")
//       .click();

//     cy.contains(this.maritalStatus, status).click();
//   }




selectMaritalStatus() {
//   cy.get('.oxd-select-text').click()
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
.type('{downarrow}{enter}');
//   cy.get('.oxd-select-dropdown').contains('Single').click();
}



<<<<<<< HEAD
=======
    cy.contains(this.maritalStatus, status).click();
    // if(status==="Single"){
    //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select("Single");
    // }else if(status==="Married"){
    //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select("Married")
    // } else{
    //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select("Othern")

    // }



  }
>>>>>>> 95f3271ece6fa244905dde016cb5a11031a17ac5
  clickOnSave() {
    cy.get(this.saveBtn).click();
  }
}
export default new PersonalDetailPage();
