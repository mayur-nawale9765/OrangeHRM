Feature: login Feature

Background: 
  Given visit website
  When provide username
  When provide password
  Then click on login button
  And verify 'dashboard' text present on top

  Scenario Outline: add user
  Then click on PIM tab
  And click on Add
  And fill the details "<fname>" and "<mdlname>" and "<lstname>"
  Then click on save button
  And select gender "<gender>"
  Then select marital status "<status>"
  And user click on save button on user detail



  Examples:
          | fname | mdlname | lstname | gender | status |
          # | rohit | gurunath | sharma | Male | Married |
          # | virat | Vvvvvvvv | kohli | Male | Married |
          | smriti | kkkkkkk | Mandhana | Female | Single |
          # | abcd | efgh | ijkl | Female | Married |
          # | xyzw | pqrs | lmno | Male | Single | 



