function askFoo() {
  return new Promise(function(resolve, reject) {
    resolve('foo');
  });
}

function run(generator) {
  var it = generator();

  function go(res) {
    if (res.done) return res.value;
    return res.value.then(function(value) {
      return go(it.next(value));
    }, function(error) {
      return go(it.throw(error));
    });
  }
  go(it.next());
}
run(function*() {
  try {
    var foo = yield askFoo();
    console.log(foo);
  } catch (err) {
    console.log(err);
  }
});

