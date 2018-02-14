function getClosestToZero() {
  var min_plus = Infinity;
  var min_minus = -Infinity;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] < min_plus & arguments[i] >= 0) {
      min_plus = arguments[i];
    } else if (arguments[i] > min_minus & arguments[i] <= 0) {
      min_minus = arguments[i];
    }
  }
  if (Math.abs(min_minus) >= min_plus) {
    return min_plus;
  } else {
    return min_minus;
  }
}
 

