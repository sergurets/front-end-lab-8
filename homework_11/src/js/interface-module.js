function renderInputs() {
  var root = document.getElementById("root");
  var title = document.createElement("h1");
  title.innerText = "Super Calculator";
  root.appendChild(title);
  var label1 = document.createElement("label");
  label1.innerText = "Operand 1";
  root.appendChild(label1);
  var input1 = document.createElement("input");
  input1.setAttribute("type", "number");
  input1.id = "number1";
  root.appendChild(input1);
  console.log(1);
  var label2 = document.createElement("label");
  label2.innerText = "Operand 2";
  root.appendChild(label2);
  var input2 = document.createElement("input");
  input2.setAttribute("type", "number");
  input2.id = "number2";
  root.appendChild(input2);
}

function renderButtons() {
  var root = document.getElementById("root");
  var arr = [{
      id: "plus",
      value: "+"
    },
    {
      id: "minus",
      value: "-"
    },
    {
      id: "multiple",
      value: "x"
    },
    {
      id: "divide",
      value: ":"
    },
    {
      id: "reset",
      value: "CE"
    }
  ];
  arr.forEach(function(element) {
    var button = document.createElement("input");
    button.id = element.id;
    button.setAttribute("type", "button");
    button.value = element.value;
    root.appendChild(button);
  })
}

function renderDivRes() {
  var root = document.getElementById("root");
  var res = document.createElement("div");
  res.id = "result";
  root.appendChild(res);

}

export function renderInterface() {
  renderInputs();
  renderButtons();
  renderDivRes();
}

