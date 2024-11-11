Feature: Calculator Presenter

  Scenario: Addition of two numbers
    Given I enter "5" as the first number
    And I enter "3" as the second number
    When I press "plus"
    Then the result should be "8"

  Scenario: Subtraction of two numbers
    Given I enter "8" as the first number
    And I enter "5" as the second number
    When I press "minus"
    Then the result should be "3"

  Scenario: Multiplication of two numbers
    Given I enter "4" as the first number
    And I enter "3" as the second number
    When I press "multiply"
    Then the result should be "12"

  Scenario: Division of two numbers
    Given I enter "10" as the first number
    And I enter "2" as the second number
    When I press "divide"
    Then the result should be "5"

  Scenario: Division by zero
    Given I enter "10" as the first number
    And I enter "0" as the second number
    When I press "divide"
    Then an error should be displayed with message "Деление на ноль!"
