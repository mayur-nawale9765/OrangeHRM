import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";
import UserManagePage from "../Pages/UserManagePage";
import PimPage from "../Pages/PimPage";
import PersonalDetail from "../Pages/PersonalDetail";
import data from "../../fixtures/userData.json";

Given("I visit the OrangeHRM page", () => {
  LoginPage.visiit();
});

When("I enter a valid username and password", () => {
  LoginPage.enterusername("Admin");
  LoginPage.enterPassword("admin123");
});

And("I click on the login button", () => {
  LoginPage.clickonlogin();
});
Then("I Verify that the Dashboard header and profile icon is visible", () => {
  DashboardPage.verifyDashboardVisible();
});

When("I click on the pim Tab", () => {
  DashboardPage.clickOnPim();
});

When("user clicks on Add Employee button", () => {
  PimPage.clickOnAddBtn();
});
When("I create employee using {string}", (userkey) => {
  const emp = data.users[userkey];
  PimPage.employeeFullName(emp.firstName, emp.middleName, emp.lastName);
  PimPage.clickOnSaveBtn();
  PimPage.verifyPersonalDetail();
  PersonalDetail.selectGender(emp.gender);
  PersonalDetail.selectMaritalStatus(emp.status);
});

And("user click on save button on user detail", () => {
  PersonalDetail.clickOnSave();
});
