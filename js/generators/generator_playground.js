const megaManNameCreator = require('../shared/common').megaManNameCreator;

const megamanBosses = {
    [Symbol.iterator]: function* () {
        while (true) {
            const doneGenerating = Math.random() > 0.85;
            if (doneGenerating) return;
            yield megaManNameCreator();
        }
    }
};

// this is better
for (const boss of megamanBosses) {
    console.log('iterated: ', boss);
}

// Fibonacci time

function fibonacciGen() {
  let [a,b] = [0,1];
  const iterator = {
    next: () => {
        const ret = { value: a, done: false };
        [a,b] = [b, a + b];
        return ret;
    }
  }
  return iterator;
}

let iterator = fibonacciGen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function * trueFibGen() {
    let [a,b] = [0,1];
    while(true) {
        let ret = a;
        [a, b] = [b, a + b];
        yield ret;
    }
}
console.log('now with syntactic sugar');
const it = trueFibGen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());