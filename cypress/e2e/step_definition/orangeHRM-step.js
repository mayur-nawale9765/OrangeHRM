import {Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";
import UserManagePage from "../Pages/UserManagePage";




Given('I visit the OrangeHRM page',()=>{
LoginPage.visiit(); 
})

When('I enter a valid username and password',()=>{
LoginPage.enterusername('Admin');
LoginPage.enterPassword('admin123');
})

And('I click on the login button',()=>{
 LoginPage.clickonlogin();
})
Then('I Verify that the Dashboard header and profile icon is visible',()=>{
DashboardPage.verifyDashboardVisible();
})


//invalid credentials

Given('I visit the OrangeHRM page',()=>{
LoginPage.visiit(); 
})

When('I enter the invalid login {string} and {string}',(username,password)=>{
    LoginPage.enterusername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickonlogin();
})

Then('i see the error',() => {
  LoginPage.verifyError('Invalid credentials');
})



When('I am click on Admin',()=>{
UserManagePage.clickAdminMenu();
})

Then('I am navigate to userpage',()=>{
UserManagePage.clickUserMenu();
})
When('I add the user with detail',()=>{
UserManagePage.fillUserDetail();
})




