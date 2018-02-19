function collectIds(arr) {
  function sort1(arr) {
    if (arr.rating > 3) {return arr.id;}
  }
  function sort2(arr) {
    if (arr) {return arr;}
  }
  return getFilteredArray(getTransformedArray(arr, sort1), sort2);
}