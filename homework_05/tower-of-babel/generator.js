const max = process.argv[2];
let FizzBuzz = function* (){
  let numb = 1;
  while (numb <= max) {
    let value = numb;
    numb++;
    if (value % 15 === 0) {
      value = 'FizzBuzz';
    } else if (value % 3 === 0) {
      value = 'Fizz';
    } else if (value % 5 === 0) {
      value = 'Buzz';
    }
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}                                                               
                                                                  