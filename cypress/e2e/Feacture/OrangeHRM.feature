Feature: login feature
Background: 
Given I visit the OrangeHRM page
When I enter a valid username and password
And I click on the login button


# Scenario: login with valid credentials
# #  Given I visit the OrangeHRM page
# #  When I enter a valid username and password
#  And I click on the login button
#  Then I Verify that the Dashboard header and profile icon is visible


#  Scenario Outline: Login with invalid password
#  Given I visit the OrangeHRM page
#  When I enter the invalid login "<username>" and "<password>"
# Then i see the error


#  Examples:
#       | username    | password   |
#       | InvalidUser | admin123   |
#       | Admin       | wrongPass  |
    #   | testUser    | test123    |



Scenario: Verifying that a new system user can be added successfully.

When I am click on Admin 
Then I am navigate to userpage
When I add the user with detail 
 
    