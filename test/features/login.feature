Feature: The Internet Guinea Login screen

  Scenario Outline: Test data sharing between steps

    Given I am on the login page
    When I login with username and <password>
    Then I should see a flash message saying <message>

    Examples:
      | password             | message                        |
      | SuperSecretPassword! | You logged into a secure area! |
      | barfoo               | Your password is invalid!      |
