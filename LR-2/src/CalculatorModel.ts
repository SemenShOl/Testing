import { ICalculator } from "./ICalculator";

export class CalculatorModel implements ICalculator {
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    if (b == 0) {
      throw new Error("Деление на ноль!");
    }
    return a / b;
  }
  sum(a: number, b: number): number {
    return a + b;
  }
}
