
async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

const iterateRange = async () => {
  var res = 0;
  for await (let i of rangeGen()) {
    res = res + i;
  }
  return res;
};
console.log(iterateRange());