const megaManNameCreator = require('../shared/common').megaManNameCreator;
const asyncMegaManNameCreator = require('../shared/common').asyncMegaManNameCreator;


/**
Iterators provide a way of pulling data out of something.

interface Iterable {
    [Symbol.iterator](): Iterator;
}

interface Iterator {
    next(): IteratorResult;
}

interface IteratorResult {
    value: any;
    done: boolean;
}

Some examples of iterable values:
Arrays
Strings
Maps
Sets
DOM nodes
*/


// this is too cumbersome
console.log(megaManNameCreator());
console.log(megaManNameCreator());
console.log(megaManNameCreator());
console.log(megaManNameCreator());

const megamanBosses = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const stop = Math.random() > 0.85;
                
                if (!stop) {
                    return {
                        value: megaManNameCreator(),
                        done: false
                    };
                } else {
                    return { 
                        value: undefined,
                        done: true 
                    };
                }
            }
        };
    }
};

// this is better
for (const boss of megamanBosses) {
    console.log('iterated: ', boss);
}

const [a, b, c] = megamanBosses;

console.log('GOT: ', a, b, c);

console.log('spread: ', ...megamanBosses);

// that's all well and good, but let's make this async
const asyncMegamanBosses = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const doneGenerating = Math.random() > 0.85;
                
                if (!doneGenerating) {
                    return {
                        value: megaManNameCreator(),
                        done: false
                    };
                } else {
                    return { 
                        value: undefined,
                        done: true 
                    };
                }
            }
        };
    }
};