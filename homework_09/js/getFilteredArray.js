function getFilteredArray(arr, f) {
  newArr = [];
  function sort(a) {
    if (f(a)) {
      newArr.push(a)
    }
  }
  forEach(arr, sort);
  return newArr;
}