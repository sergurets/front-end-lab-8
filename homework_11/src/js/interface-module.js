export function renderInterface() {
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



