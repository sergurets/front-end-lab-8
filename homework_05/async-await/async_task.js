const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};

const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};

const doAsyncMagic = async function() {
  var res = await Promise.all([
    asyncFn(),
    asyncFn(),
    asyncFn(),
    asyncFn()
  ]).then(function(res) {
    console.log(res)
  });
};

doAsyncMagic();

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

const iterateRange = async function() {
  var res = 0;
  for await (let i of rangeGen()) {
    res = res + i;
  }
  return res;
};

iterateRange();
