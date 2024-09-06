import { CalculatorModel } from "../CalculatorModel";
import { describe, expect, it, beforeEach } from "vitest";
describe("CalculatorModel", () => {
  let calculator: CalculatorModel;

  beforeEach(() => {
    calculator = new CalculatorModel();
  });

  // Тест на сумму
  it("should return the correct sum of two numbers", () => {
    expect(calculator.sum(2, 3)).toBe(5);
    expect(calculator.sum(-2, -3)).toBe(-5);
    expect(calculator.sum(-2, 3)).toBe(1);
  });

  // Тест на вычитание
  it("should return the correct difference of two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(-5, -3)).toBe(-2);
    expect(calculator.subtract(5, -3)).toBe(8);
  });

  // Тест на умножение
  it("should return the correct product of two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, -3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  // Тест на деление
  it("should return the correct quotient of two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, -3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
  });

  // Тест на деление на ноль
  it("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrowError("Деление на ноль!");
  });
});
