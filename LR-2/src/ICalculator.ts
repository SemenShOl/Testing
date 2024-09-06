export interface ICalculator {
  /**
   * Вычисляет сумму двух чисел
   */
  sum(a: number, b: number): number;

  /**
   * Вычисляет разность двух чисел a - b
   */
  subtract(a: number, b: number): number;

  /**
   * Вычисляет произведение двух чисел
   */
  multiply(a: number, b: number): number;

  /**
   * Вычисляет отношение числа а к числу b.
   */
  divide(a: number, b: number): number;
}
