import { Given, When, Then, Before } from "@cucumber/cucumber";
import assert from "assert";
import { CalculatorPresenter } from "../../js/CalculatorPresenter.js";
import { CalculatorView } from "../../js/CalculatorView.js";
import { CalculatorModel } from "../../js/CalculatorModel.js";
// Заглушка для представления (View)
class CalculatorViewStub {
  constructor() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.result = "";
    this.error = "";
  }

  getFirstArgumentAsString() {
    return this.firstNumber;
  }

  getSecondArgumentAsString() {
    return this.secondNumber;
  }

  printResult(result) {
    this.result = result.toString();
  }

  displayError(message) {
    this.error = message;
  }

  onPlusClicked(callback) {
    this.plusCallback = callback;
  }

  onMinusClicked(callback) {
    this.minusCallback = callback;
  }

  onMultiplyClicked(callback) {
    this.multiplyCallback = callback;
  }

  onDivideClicked(callback) {
    this.divideCallback = callback;
  }
}

// Заглушка для модели (Model)
// class CalculatorModelStub {
//   sum(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     if (b === 0) {
//       throw new Error("Деление на ноль!");
//     }
//     return a / b;
//   }
// }

let view;
let model;
let presenter;

Given("I enter {string} as the first number", function (number) {
  view.firstNumber = number;
});

Given("I enter {string} as the second number", function (number) {
  view.secondNumber = number;
});

When("I press {string}", function (operation) {
  switch (operation) {
    case "plus":
      view.plusCallback();
      break;
    case "minus":
      view.minusCallback();
      break;
    case "multiply":
      view.multiplyCallback();
      break;
    case "divide":
      view.divideCallback();
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
});

Then("the result should be {string}", function (expectedResult) {
  assert.strictEqual(view.result, expectedResult);
});

Then(
  "an error should be displayed with message {string}",
  function (expectedMessage) {
    assert.strictEqual(view.error, expectedMessage);
  }
);

// Инициализация перед каждым сценарием
Before(function () {
  view = new CalculatorViewStub();
  model = new CalculatorModel();
  presenter = new CalculatorPresenter(view, model);
});
