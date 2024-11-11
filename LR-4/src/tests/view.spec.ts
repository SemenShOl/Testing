import { CalculatorView } from "../CalculatorView";
import { describe, expect, it, beforeEach } from "vitest";
import { vitest } from "vitest";
describe("CalculatorView", () => {
  let view: CalculatorView;
  let plusButton: HTMLButtonElement;
  let minusButton: HTMLButtonElement;
  let divideButton: HTMLButtonElement;
  let multiplyButton: HTMLButtonElement;
  let resultElement: HTMLElement;
  let errorElement: HTMLElement;
  let num1Input: HTMLInputElement;
  let num2Input: HTMLInputElement;

  beforeEach(() => {
    // Создаем тестовые элементы DOM
    document.body.innerHTML = `
      <button id="plus"></button>
      <button id="minus"></button>
      <button id="divide"></button>
      <button id="multiply"></button>
      <span id="result"></span>
      <div class="error"></div>
      <input id="num1" />
      <input id="num2" />
    `;

    // Инициализируем переменные
    plusButton = document.getElementById("plus") as HTMLButtonElement;
    minusButton = document.getElementById("minus") as HTMLButtonElement;
    divideButton = document.getElementById("divide") as HTMLButtonElement;
    multiplyButton = document.getElementById("multiply") as HTMLButtonElement;
    resultElement = document.getElementById("result") as HTMLElement;
    errorElement = document.querySelector(".error") as HTMLElement;
    num1Input = document.getElementById("num1") as HTMLInputElement;
    num2Input = document.getElementById("num2") as HTMLInputElement;

    view = new CalculatorView();
  });

  // Тест на событие "плюс"
  it("should call handler when plus button is clicked", () => {
    const handler = vitest.fn();
    view.onPlusClicked(handler);

    plusButton.click();

    expect(handler).toHaveBeenCalled();
  });

  // Тест на событие "минус"
  it("should call handler when minus button is clicked", () => {
    const handler = vitest.fn();
    view.onMinusClicked(handler);

    minusButton.click();

    expect(handler).toHaveBeenCalled();
  });

  // Тест на событие "деление"
  it("should call handler when divide button is clicked", () => {
    const handler = vitest.fn();
    view.onDivideClicked(handler);

    divideButton.click();

    expect(handler).toHaveBeenCalled();
  });

  // Тест на событие "умножение"
  it("should call handler when multiply button is clicked", () => {
    const handler = vitest.fn();
    view.onMultiplyClicked(handler);

    multiplyButton.click();

    expect(handler).toHaveBeenCalled();
  });

  // Тест на отображение результата
  it("should display the correct result", () => {
    view.printResult(42);
    expect(resultElement.textContent).toBe("42");
    expect(errorElement.textContent).toBe(""); // Ошибок быть не должно
  });

  // Тест на отображение ошибки
  it("should display an error message", () => {
    view.displayError("Some error occurred");
    expect(errorElement.textContent).toBe("Some error occurred");
  });

  // Тест на получение первого аргумента
  it("should return the value of the first argument", () => {
    num1Input.value = "10";
    expect(view.getFirstArgumentAsString()).toBe("10");
  });

  // Тест на получение второго аргумента
  it("should return the value of the second argument", () => {
    num2Input.value = "20";
    expect(view.getSecondArgumentAsString()).toBe("20");
  });
});
