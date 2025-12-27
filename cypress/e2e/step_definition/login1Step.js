import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps'
import {loginPageElements} from '../PageElement/loginPageElement'
const login_ele=new loginPageElements
const passELE=require ('../PageElement/element.json')
import Pim from '../PageElement/PIM_Page'
import personal_details from '../PageElement/per_details'

Given("visit website",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("provide username",()=>{
    login_ele.userName(passELE.keyvalue.userkey)
     
})

When("provide password",()=>{
    login_ele.password(passELE.keyvalue.passkey)
    
})

Then("click on login button",()=>{
    login_ele.Loginbutton()
   
})

And("verify 'dashboard' text present on top",()=>{
    login_ele.text_validation()
})

Then("click on PIM tab",()=>{
    Pim.clickOnPIM()
})

And("click on Add",()=>{
    Pim.clickOnAdd()
})

And("fill the details {string} and {string} and {string}",(fname,mdlname,lstname)=>{
    Pim.fill_details(fname,mdlname,lstname)
    
})
Then("click on save button",()=>{
    Pim.clickOnSave()
})

And("select gender {string}",(gender)=>{
    personal_details.selectGender(gender)
})

Then("select marital status {string}",(status)=>{
    personal_details.selectMaritalStatus(status)
})

And("user click on save button on user detail",()=>{
    personal_details.clickOnSave()
})

