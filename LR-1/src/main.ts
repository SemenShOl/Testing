import { CalculatorModel } from "./CalculatorModel";
import { CalculatorPresenter } from "./CalculatorPresenter";
import { CalculatorView } from "./CalculatorView";
import "./style.css";
const view = new CalculatorView();
const model = new CalculatorModel();
const presenter = new CalculatorPresenter(view, model);
