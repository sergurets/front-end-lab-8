function reverseNumber(numb) {
  var str = String(numb);
  str = str.split('');
  if (str[0] === "-") {
    str[0] = '';
    str[str.length] = "-";
  }
  return (Number(str.reverse().join('')));
}