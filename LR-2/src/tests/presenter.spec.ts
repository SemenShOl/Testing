import { CalculatorPresenter } from "../CalculatorPresenter";
import { ICalculator } from "../ICalculator";
import { ICalculatorView } from "../ICalculatorView";
import { Mocked, vitest } from "vitest";
import { describe, expect, it, beforeEach } from "vitest";

describe("CalculatorPresenter", () => {
  let presenter: CalculatorPresenter;
  let mockView: Mocked<ICalculatorView>;
  let mockModel: Mocked<ICalculator>;

  beforeEach(() => {
    // Создаем подмены для view и model
    mockView = {
      onPlusClicked: vitest.fn(),
      onMinusClicked: vitest.fn(),
      onDivideClicked: vitest.fn(),
      onMultiplyClicked: vitest.fn(),
      getFirstArgumentAsString: vitest.fn(),
      getSecondArgumentAsString: vitest.fn(),
      printResult: vitest.fn(),
      displayError: vitest.fn(),
    };

    mockModel = {
      sum: vitest.fn(),
      subtract: vitest.fn(),
      divide: vitest.fn(),
      multiply: vitest.fn(),
    };

    presenter = new CalculatorPresenter(mockView, mockModel);
  });

  // Тест на сложение
  it("should call model.sum and view.printResult when plus is clicked", () => {
    mockView.getFirstArgumentAsString.mockReturnValue("5");
    mockView.getSecondArgumentAsString.mockReturnValue("3");
    mockModel.sum.mockReturnValue(8);

    presenter.onPlusClicked();

    expect(mockView.getFirstArgumentAsString).toHaveBeenCalled();
    expect(mockView.getSecondArgumentAsString).toHaveBeenCalled();
    expect(mockModel.sum).toHaveBeenCalledWith(5, 3);
    expect(mockView.printResult).toHaveBeenCalledWith(8);
  });

  // Тест на вычитание
  it("should call model.subtract and view.printResult when minus is clicked", () => {
    mockView.getFirstArgumentAsString.mockReturnValue("8");
    mockView.getSecondArgumentAsString.mockReturnValue("5");
    mockModel.subtract.mockReturnValue(3);

    presenter.onMinusClicked();

    expect(mockView.getFirstArgumentAsString).toHaveBeenCalled();
    expect(mockView.getSecondArgumentAsString).toHaveBeenCalled();
    expect(mockModel.subtract).toHaveBeenCalledWith(8, 5);
    expect(mockView.printResult).toHaveBeenCalledWith(3);
  });

  // Тест на умножение
  it("should call model.multiply and view.printResult when multiply is clicked", () => {
    mockView.getFirstArgumentAsString.mockReturnValue("2");
    mockView.getSecondArgumentAsString.mockReturnValue("4");
    mockModel.multiply.mockReturnValue(8);

    presenter.onMultiplyClicked();

    expect(mockView.getFirstArgumentAsString).toHaveBeenCalled();
    expect(mockView.getSecondArgumentAsString).toHaveBeenCalled();
    expect(mockModel.multiply).toHaveBeenCalledWith(2, 4);
    expect(mockView.printResult).toHaveBeenCalledWith(8);
  });

  // Тест на деление
  it("should call model.divide and view.printResult when divide is clicked", () => {
    mockView.getFirstArgumentAsString.mockReturnValue("10");
    mockView.getSecondArgumentAsString.mockReturnValue("2");
    mockModel.divide.mockReturnValue(5);

    presenter.onDivideClicked();

    expect(mockView.getFirstArgumentAsString).toHaveBeenCalled();
    expect(mockView.getSecondArgumentAsString).toHaveBeenCalled();
    expect(mockModel.divide).toHaveBeenCalledWith(10, 2);
    expect(mockView.printResult).toHaveBeenCalledWith(5);
  });

  // Тест на ошибку при делении на ноль
  it("should call view.displayError when division by zero occurs", () => {
    mockView.getFirstArgumentAsString.mockReturnValue("10");
    mockView.getSecondArgumentAsString.mockReturnValue("0");
    mockModel.divide.mockImplementation(() => {
      throw new Error("Деление на ноль!");
    });

    presenter.onDivideClicked();

    expect(mockView.getFirstArgumentAsString).toHaveBeenCalled();
    expect(mockView.getSecondArgumentAsString).toHaveBeenCalled();
    expect(mockModel.divide).toHaveBeenCalledWith(10, 0);
    expect(mockView.displayError).toHaveBeenCalledWith("Деление на ноль!");
  });
});
