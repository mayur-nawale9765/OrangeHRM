Feature: login feature
    Background:
        Given I visit the OrangeHRM page
        When I enter a valid username and password
        And I click on the login button
        Then I Verify that the Dashboard header and profile icon is visible

    Scenario Outline:verify the user can create successfully
        When I click on the pim Tab
        And user clicks on Add Employee button
        And user enters first name "<fname>" and "<midname>" and "<lname>"
        And user clicks on Save button
        # Then user is on the user detail page
        When user selects gender as "<gender>"
        And user selects marital status as "<status>"
        And user click on save button on user detail

        Examples:
            | fname     | midname | lname   | gender | status    |
            | sandesh   | nana    | kale    | male   | unmarried |
            # | virat     | xyz     | kohli   | male   | married   |
            # | sshubhman | abc     | Gill    | male   | unmarried |
            # | Smruti    | lmn     | mandana | female | unmarried |
            # | Abhishekh | uvw     | sharma  | male   | unmarried |





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



# Scenario: Verifying that a new system user can be added successfully.

#     When I am click on Admin
#     Then I am navigate to userpage
#     When I add the user with detail

