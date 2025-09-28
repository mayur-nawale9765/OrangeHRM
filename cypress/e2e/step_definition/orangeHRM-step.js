import {Given,when,Then,And } from "cypress-cucumber-preprocessor/steps"
Given('I visit the OrangeHRM page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})