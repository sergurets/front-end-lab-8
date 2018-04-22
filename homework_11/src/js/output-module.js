import { multiple,divide,plus,minus } from './calculating-module';
import { renderInterface } from './interface-module.js';
import style from '../styles/styles.css';

renderInterface();

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var plusBtn = document.getElementById("plus");
var minusBtn = document.getElementById("minus");
var multipleBtn = document.getElementById("multiple");
var divideBtn = document.getElementById("divide");
var result = document.getElementById("result");
var res = document.getElementById("reset");

addClick();

clearInputs();

function giveNumbers() {
  if (input1.value.length === 0 || input2.value.length === 0) {
    return false
  } else {
    return {
      a: Number(input1.value),
      b: Number(input2.value)
    }
  }
}

function operations() {
  clearResult();
  var data = giveNumbers();
  if (data) {
    switch (this.id) {
      case "multiple":
        renderText(data, 'x')
        render(multiple(data));
        break;
      case "plus":
        renderText(data, '+')
        render(plus(data));
        break;
      case "divide":
        if (data.b === 0) {
          render('Can not divide a number by zero!')
        } else {
          renderText(data, ':')
          render(divide(data));
        }
        break;
      case "minus":
        renderText(data, '-')
        render(minus(data));
        break;
    }
  } else {
    render('You did not enter two numbers!')
  }
  clearInputs();
}

function render(res) {
  var span = document.createElement("span");
  span.innerHTML = `${res}`;
  result.appendChild(span);
}

function renderText(obj, str) {
  var text = `${obj.a} ${str} ${obj.b} = `;
  var span = document.createElement("span");
  span.innerHTML = text;
  result.appendChild(span);
}

function clearResult() {
  result.innerHTML = '';
}

function clearInputs() {

  input1.value = null;
  input2.value = null;
}

function clearAll() {
  clearInputs();
  clearResult();
}

function addClick() {
  input1.addEventListener("click", clearResult);
  input2.addEventListener("click", clearResult);
  res.addEventListener("click", clearAll);
  multipleBtn.addEventListener("click", operations);
  divideBtn.addEventListener("click", operations);
  plusBtn.addEventListener("click", operations);
  minusBtn.addEventListener("click", operations);
}
