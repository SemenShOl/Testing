import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { CalculatorModel } from "../../js/CalculatorModel.js";

let calculator;
let result;
let error;

Given("the calculator is on", function () {
  calculator = new CalculatorModel();
});

When("I add {int} and {int}", function (a, b) {
  result = calculator.sum(a, b);
});

When("I subtract {int} from {int}", function (a, b) {
  result = calculator.subtract(b, a);
});

When("I multiply {int} by {int}", function (a, b) {
  result = calculator.multiply(a, b);
});

When("I divide {int} by {int}", function (a, b) {
  try {
    result = calculator.divide(a, b);
  } catch (err) {
    error = err;
  }
});

Then("the result should be {int}", function (expectedResult) {
  assert.strictEqual(result, expectedResult);
});

Then(
  "an error should be raised with the message {string}",
  function (expectedMessage) {
    assert.strictEqual(error.message, expectedMessage);
  }
);
