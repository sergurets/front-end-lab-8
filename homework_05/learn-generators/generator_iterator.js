function *factorial (n) {
  let numb = 1;
  for (let i = 1; i <= n; i++) {
    numb = numb*i;
    yield numb;  }
}

for (var n of factorial(5)) {
  console.log(n)
}