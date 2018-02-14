function getClosestToZero() {
  var min = Infinity;
  for (var i = 0; i < arguments.length; i++) {
    if (Math.abs(arguments[i]) < Math.abs(min)) {
      min = arguments[i];
    }
  }
  return min;
}
