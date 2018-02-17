function decypherPhrase(obj, str) {
  var objTrans = {};
  for (var key in obj) {
    objTrans[obj[key]] = key;
  }
  return cypherPhrase(objTrans, str);
}