import { ICalculatorView } from "./ICalculatorView";
export class CalculatorView implements ICalculatorView {
  constructor() {}
  onPlusClicked(handler: () => void): void {
    const plus = document.getElementById("plus");
    plus?.addEventListener("click", handler);
  }
  onMinusClicked(handler: () => void): void {
    const minus = document.getElementById("minus");
    minus?.addEventListener("click", handler);
  }
  onDivideClicked(handler: () => void): void {
    const divide = document.getElementById("divide");
    divide?.addEventListener("click", handler);
  }
  onMultiplyClicked(handler: () => void): void {
    const multiply = document.getElementById("multiply");
    multiply?.addEventListener("click", handler);
  }
  printResult(result: number): void {
    const resultElement = document.getElementById("result");
    const errorElement = document.querySelector(".error");

    if (resultElement) {
      resultElement.textContent = result.toString();
    }
    if (errorElement) {
      errorElement.textContent = "";
    }
  }
  displayError(message: string): void {
    const errorElement = document.querySelector(".error");
    debugger;
    if (errorElement) {
      errorElement.textContent = message;
    }
  }
  getFirstArgumentAsString(): string {
    const num1 = document.getElementById("num1") as HTMLInputElement;
    return num1.value ?? "";
  }
  getSecondArgumentAsString(): string {
    const num2 = document.getElementById("num2") as HTMLInputElement;
    return num2?.value ?? "";
  }
}
