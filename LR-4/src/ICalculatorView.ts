export interface ICalculatorView {
  /**
   * Отображает результат вычисления
   */
  printResult(result: number): void;

  /**
   * Показывает ошибку, например деление на 0, пустые аргументы и прочее
   */
  displayError(message: string): void;

  /**
   * Возвращает значение, введенное в поле первого аргументы
   */
  getFirstArgumentAsString(): string;

  /**
   * Возвращает значение, введенное в поле второго аргументы
   */
  getSecondArgumentAsString(): string;

  onPlusClicked(handler: () => void): void;

  onMinusClicked(handler: () => void): void;

  onDivideClicked(handler: () => void): void;

  onMultiplyClicked(handler: () => void): void;
}
