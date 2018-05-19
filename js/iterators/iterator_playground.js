const megaManNameCreator = require('../shared/common').megaManNameCreator;
const asyncMegaManNameCreator = require('../shared/common').asyncMegaManNameCreator;

// this is too cumbersome
console.log(megaManNameCreator());
console.log(megaManNameCreator());
console.log(megaManNameCreator());
console.log(megaManNameCreator());

const megamanBosses = {
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

// this is better
for (const boss of megamanBosses) {
    console.log('iterated: ', boss);
}

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