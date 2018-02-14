function isPrime(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        result = false;
        break;
      } else {
        result = true
      }
    }
    return result;
  }
}