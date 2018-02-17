function collectIds(arr) {
  function sort(arr) {
    if (arr.rating > 3) {
      return arr.id
    }
  }
  function sort2(arr) {
    if (arr != undefined) return arr
  }
  return getFilteredArray(getTransformedArray(arr, sort), sort2);
}