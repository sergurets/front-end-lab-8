/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_module_js__ = __webpack_require__(2);


//import style from '../styles/styles.css';

Object(__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["a" /* renderInterface */])();

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
    return false;
  } else {
    return {
      a: Number(input1.value),
      b: Number(input2.value)
    };
  }
}

function operations() {
  clearResult();
  var data = giveNumbers();
  if (data) {
    switch (this.id) {
      case "multiple":
        renderText(data, 'x');
        render(Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["c" /* multiple */])(data));
        break;
      case "plus":
        renderText(data, '+');
        render(Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["d" /* plus */])(data));
        break;
      case "divide":
        if (data.b === 0) {
          render('Can not divide a number by zero!');
        } else {
          renderText(data, ':');
          render(Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* divide */])(data));
        }
        break;
      case "minus":
        renderText(data, '-');
        render(Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["b" /* minus */])(data));
        break;
    }
  } else {
    render('You did not enter two numbers!');
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = multiple;
/* harmony export (immutable) */ __webpack_exports__["a"] = divide;
/* harmony export (immutable) */ __webpack_exports__["d"] = plus;
/* harmony export (immutable) */ __webpack_exports__["b"] = minus;
function multiple(obj) {
  return obj.a * obj.b;
}

function divide(obj) {
  return obj.a / obj.b;
}

function plus(obj) {
  return obj.a + obj.b;
}

function minus(obj) {
  return obj.a - obj.b;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderInterface;
function renderInterface() {
				var interFace = `<h1>Super Calculator</h1>
  <label>Operand 1</label>
  <input id="number1" type="number">
  <br>
  <label>Operand 2</label>
  <input id="number2" type="number">
  </br>
  <input id="plus" type="button" value="+">
  <input id="minus" type="button" value="-">
  <input id="multiple" type="button" value="x">
  <input id="divide" type="button" value=":">
  <input id="reset" type="button" value="CE">
  <div id="result"></div>`;
				var root = document.getElementById("root");
				root.innerHTML = interFace;
}

/*import { multiple, divide, plus, minus } from './calculating-module';
import { render, renderText, clearResult, clearInputs, clearAll} from './output-module.js';*/

/*
function renderInputs(){
    var root = document.getElementById("root");
	var title = document.createElement("h1");
	title.innerText = "Super Calculator";
	root.appendChild(title);
	var label1=document.createElement("label");
	label1.innerText = "Operand 1";
	root.appendChild(label1);	
	var input1 = document.createElement("input");
	input1.setAttribute("type", "number");
	input1.id="number1";
	root.appendChild(input1);
	console.log(1);
	var label2=document.createElement("label");
	label2.innerText = "Operand 2";
	root.appendChild(label2);
	var input2 = document.createElement("input");
	input2.setAttribute("type", "number");
	input2.id="number2";
	root.appendChild(input2);
}






function renderButtons(){
    var root = document.getElementById("root");
	console.log(2);
	var arr = [{id: "plus", value: "+" },
      {id: "minus", value: "-" },
      {id: "multiple", value: "x"},
      {id: "divide", value: ":" },
	  {id: "reset", value: "CE" }]
	  arr.forEach(function(element, root) {
		 var root = document.getElementById("root");
		 var button = document.createElement("button"); 
		 button.id=element.id;
		 button.setAttribute("type", "button");
		 button.innerText =  element.value;
		 root.appendChild(button);		  
         console.log(button);
});
}
function renderDivRes(){
    var root = document.getElementById("root");
	var res = document.createElement("div");
	res.id = "result"; 
	console.log(3);
	root.appendChild(res);	
	
};


export function renderInterface(){
renderInputs();
renderButtons();
renderDivRes();
}

*/

/***/ })
/******/ ]);