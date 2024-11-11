export class CalculatorView {
  constructor() {}
  onPlusClicked(handler) {
    const plus = document.getElementById("plus");
    plus?.addEventListener("click", handler);
  }
  onMinusClicked(handler) {
    const minus = document.getElementById("minus");
    minus?.addEventListener("click", handler);
  }
  onDivideClicked(handler) {
    const divide = document.getElementById("divide");
    divide?.addEventListener("click", handler);
  }
  onMultiplyClicked(handler) {
    const multiply = document.getElementById("multiply");
    multiply?.addEventListener("click", handler);
  }
  printResult(result) {
    const resultElement = document.getElementById("result");
    const errorElement = document.querySelector(".error");

    if (resultElement) {
      resultElement.textContent = result.toString();
    }
    if (errorElement) {
      errorElement.textContent = "";
    }
  }
  displayError(message) {
    const errorElement = document.querySelector(".error");
    debugger;
    if (errorElement) {
      errorElement.textContent = message;
    }
  }
  getFirstArgumentAsString() {
    const num1 = document.getElementById("num1");
    return num1.value ?? "";
  }
  getSecondArgumentAsString() {
    const num2 = document.getElementById("num2");
    return num2?.value ?? "";
  }
}
