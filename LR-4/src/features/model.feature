Feature: Calculator

  Scenario: Addition of two numbers
    Given the calculator is on
    When I add 5 and 3
    Then the result should be 8

  Scenario: Subtraction of two numbers
    Given the calculator is on
    When I subtract 5 from 8
    Then the result should be 3

  Scenario: Multiplication of two numbers
    Given the calculator is on
    When I multiply 4 by 3
    Then the result should be 12

  Scenario: Division of two numbers
    Given the calculator is on
    When I divide 10 by 2
    Then the result should be 5

  Scenario: Division by zero
    Given the calculator is on
    When I divide 10 by 0
    Then an error should be raised with the message "Деление на ноль!"
