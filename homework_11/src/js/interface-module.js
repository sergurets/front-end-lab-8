function renderInputs(){
  var interFace = `<h1>Super Calculator</h1>
  <label>Operand 1</label>
  <input id="number1" type="number">
  <br>
  <label>Operand 2</label>
  <input id="number2" type="number">
  </br>`;
  var root = document.getElementById("root");
  root.innerHTML = interFace;
};

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

