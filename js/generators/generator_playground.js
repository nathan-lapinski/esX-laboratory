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