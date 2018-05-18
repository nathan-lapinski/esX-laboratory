const megaManNameCreator = () => {
    const abilities = [
        'Fire',
        'Ice',
        'Wind',
        'Metal',
        'Blade',
        'Storm',
        'Thunder',
        'Blast',
        'Kinetic',
        'Snow'
    ];

    const randomIndex = Math.floor(Math.random() * (abilities.length));

    return abilities[randomIndex] + ' Man';
}

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