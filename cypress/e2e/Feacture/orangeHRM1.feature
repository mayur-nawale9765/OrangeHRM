Feature: Employee creation using username keys

  Background:
    Given I visit the OrangeHRM page
    When I enter a valid username and password
    And I click on the login button
    Then I Verify that the Dashboard header and profile icon is visible

  Scenario Outline: Create employee using JSON data by username key
  When I click on the pim Tab
  And user clicks on Add Employee button
    When I create employee using "<userKey>"

  Examples:
    | userKey |
    | user1   |
    | user2   |
    | user3   |
    | user4   |
    | user5   |
    
