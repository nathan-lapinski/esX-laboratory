let arr = [1,2,3];

for (const val of arr) {
    console.log('normal way: ', val);
}

// or directly

let iterator = arr[Symbol.iterator]();

for (const val of iterator) {
    console.log('iterator way: ', val);
}