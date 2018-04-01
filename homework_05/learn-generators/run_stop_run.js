function* range(from, to) {
  let numb = from;
  while (numb <= to) {
    yield numb++;
  }
}

for (var r of range(5, 10)) {
  console.log(r);
}