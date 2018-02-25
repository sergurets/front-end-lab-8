function debounce(f, delay) {
  let timerId = null;
  return function() {
    let arg = arguments;
    let cont = this;
    let del = function() {
      f.apply(cont, arg);
    };
    clearTimeout(timerId);
    timerId = setTimeout(del, delay);

  };
};

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'