class Pim{
       Pim_click= ':nth-child(2) > .oxd-main-menu-item';
       add_user_click='.oxd-topbar-body-nav > ul > :nth-child(3)';
       first_Name='[name="firstName"]';
       middle_name='[name="middleName"]';
       last_Name='[name="lastName"]';
       save_Btn=".oxd-button--secondary"


    clickOnPIM(){
        cy.get(this.Pim_click).contains("PIM").click();
    }

    clickOnAdd(){
        cy.get(this.add_user_click).click()
    }

    fill_details(fname,mdlname,lstname){
        cy.get(this.first_Name).type(fname);
        cy.get(this.middle_name).type(mdlname);
        cy.get(this.last_Name).type(lstname)
    }

    clickOnSave(){
        cy.get(this.save_Btn).click()
    }
}
export default new Pim()