function cypherPhrase(obj, str) {
  var arr = str.split('');
  for (var key in obj) {
    function f(a) {
      if (a === key) {
        return obj[key];
      } else {
        return a;
      }
    }
    arr = getTransformedArray(arr, f);
  }
  return arr.join('');
}
