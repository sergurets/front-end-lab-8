var a, b, c, s, p, type, result, s_res;
result = "";
type = 'Type of triangle is ';
a = Number(prompt("length of the first side of the triangle"));
b = Number(prompt("length of the second side of the triangle"));
c = Number(prompt("length of the third side of the triangle"));
square();
if (s.toFixed(2) <= 0 || (a < 0 || b < 0 || c < 0 || isNaN(s) || s == 0)) {
  result = "Incorrect data"
} else {
  isRight()
  isEqual();
  (s.toFixed(2) > Math.floor(s)) ? s_res = s.toFixed(2): s_res = Math.floor(s);
  result = type + "triangle and square is " + s_res;
}
console.log(result);
/*****/
function isRight() {
  arr = [a, b, c].sort(function(m, n) {
    return m - n;
  });
  if ((arr[2] * arr[2]) == (arr[0] * arr[0] + arr[1] * arr[1])) {
    type = type + 'right ';
  }
}
/*****/
function isEqual() {
  if (a == b & b == c) {
    type = type + 'equilateral ';
  } else if (a == b || b == c || a == c) {
    type = type + 'isosceles ';
  } else {
    type = type + 'scalene ';
  }
}
/****/
function square() {
  p = (a + b + c) / 2;
  s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
