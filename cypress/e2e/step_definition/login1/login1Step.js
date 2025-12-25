import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import {loginPageElements} from '../PageElement/loginPageElement'
const login_ele=new loginPageElements
const passELE=require ('../PageElement/element.json')

Given("visit website",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("provide username",()=>{
    login_ele.userName(passELE.keyvalue.userkey)
     return
})

When("provide password",()=>{
    login_ele.password(passELE.keyvalue.passkey)
    return
})

Then("click on login button",()=>{
    login_ele.Loginbutton()
    return
})

