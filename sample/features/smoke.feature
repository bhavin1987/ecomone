#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
Feature: Test Facebook smoke scenario

  @tag1
  Scenario Outline: Test Facebook valid login
    Given Open Facebook And start application
    When Enter valid "<username>" And valid "<password>"
    Then user should be able to login successfully.

    Examples: 
      | username  | password |
      | username1 | passwor1 |
      | username2 | passwor2 |
      | username3 | passwor3 |
#Examples:
 #   | name  |value | status |
  #  | name1 |  5   | success|
   # | name2 |  7   | Fail   |

