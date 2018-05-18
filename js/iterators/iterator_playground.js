const megaManNameCreator = require('../shared/common').megaManNameCreator;

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