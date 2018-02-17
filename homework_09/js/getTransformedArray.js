function getTransformedArray(arr, f) {
  newArr = [];
  function transform(a) {
    newArr.push(f(a));
  }
  forEach(arr, transform);
  return newArr;
}