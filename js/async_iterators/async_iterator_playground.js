const tables = {
    customer: {
        1 : { name: 'John' },
        2 : { name: 'Paul' },
        3 : { name: 'George' },
        4 : { name: 'Ringo' }
    },
    food: {
        1 : ['cake'],
        2 : ['tea'],
        3 : ['pie'],
        4 : ['pineapple'],
    },
};

const store = (table, id) => tables[table][id];


// standard iterator

const customers = {
    [Symbol.iterator]: () => {
        let counter = 1;
        return {
            next: () => {
                if (counter > 4) return { done: true }
                return {
                    value: store('customer', counter++),
                    done: false
                }
            }
        }
    }
}

for (let c of customers) {
    console.log(c);
}

// async
