class Input {
  constructor(placeHolder) {
    this.placeHolder = placeHolder || "Type...";
    this._value = "";
  }

  get value() {
    return this._value;
  }

  setValue(newValue) {
    this._value = newValue;
  }
}

class NumberInput extends Input {
  constructor(placeHolder) {
    super(placeHolder);
    this.type = "number";
  }
}

let numberInput = new NumberInput("Type numbers...");

function AddRequiredValidation(input) {
  if (!input.value) {
    input.valid = false;
    console.log('not validated')
  } else {
    input.valid = true;
    console.log("valid");
  }
}

function AddNumberValidation(input) {
  if (typeof input.value != 'number') {
    input.valid = false;
    console.log('not validated')
  } else {
    input.valid = true;
    console.log("valid");
  }
}

function AddMaxLengthValidation(input, maxLength) {
  input.maxLength = maxLength;
  if (input.value.toString().length > input.maxLength) {
    input.valid = false;
    console.log('not validated')
  } else {
    input.valid = true;
    console.log("valid");
  }
}


AddRequiredValidation(numberInput);
console.log(numberInput.valid);// ---> false, because of required validator
numberInput.setValue("1");
AddNumberValidation(numberInput);
console.log(numberInput.valid);// ---> false, because of number validator
numberInput.setValue(1);
AddNumberValidation(numberInput);
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 20);
console.log(numberInput.valid);// ---> true, all validators pass
numberInput.setValue(1111111111111111111111111111);
AddMaxLengthValidation(numberInput, 20);
console.log(numberInput.valid);// ---> false, because of max length validator






