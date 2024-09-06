import { ICalculator } from "./ICalculator";
import { ICalculatorPresenter } from "./ICalculatorPresenter";
import { ICalculatorView } from "./ICalculatorView";

export class CalculatorPresenter implements ICalculatorPresenter {
  private readonly view: ICalculatorView;
  private readonly model: ICalculator;
  constructor(view: ICalculatorView, model: ICalculator) {
    this.view = view;
    this.model = model;
    this.view.onPlusClicked(this.onPlusClicked.bind(this));
    this.view.onMinusClicked(this.onMinusClicked.bind(this));
    this.view.onDivideClicked(this.onDivideClicked.bind(this));
    this.view.onMultiplyClicked(this.onMultiplyClicked.bind(this));
  }
  onPlusClicked(): void {
    const number1 = this.view.getFirstArgumentAsString();
    const number2 = this.view.getSecondArgumentAsString();
    console.log("click");
    const result = this.model.sum(Number(number1), Number(number2));
    this.view.printResult(result);
  }
  onMinusClicked(): void {
    const number1 = this.view.getFirstArgumentAsString();
    const number2 = this.view.getSecondArgumentAsString();
    const result = this.model.subtract(Number(number1), Number(number2));
    this.view.printResult(result);
  }
  onDivideClicked(): void {
    const number1 = this.view.getFirstArgumentAsString();
    const number2 = this.view.getSecondArgumentAsString();
    let result = 0;
    try {
      result = this.model.divide(Number(number1), Number(number2));
      this.view.printResult(result);
    } catch (error: Error | any) {
      console.log("error!");
      this.view.displayError(error.message);
    }
  }
  onMultiplyClicked(): void {
    const number1 = this.view.getFirstArgumentAsString();
    const number2 = this.view.getSecondArgumentAsString();
    const result = this.model.multiply(Number(number1), Number(number2));
    this.view.printResult(result);
  }
}
