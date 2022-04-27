Feature: The Internet Guinea Login screen

  Background: Open App
    Given I am on the login page

  Scenario Outline: Test data sharing between steps
    When I fetch username from the login page instruction
    Then I validate value fetched is <username>

    Examples:
      | username |
      | tomsmith |

  Scenario Outline: Test data sharing between scenarios
    Then I validate value fetched is <username>

    Examples:
      | username |
      | tomsmith |