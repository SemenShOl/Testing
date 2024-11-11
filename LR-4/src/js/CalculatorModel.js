export class CalculatorModel {
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b == 0) {
      throw new Error("Деление на ноль!");
    }
    return a / b;
  }
  sum(a, b) {
    return a + b;
  }
}
