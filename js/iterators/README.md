# Iterators

Iterators are things which implement the iterable interface. What's that? Well, the iterable interface provides an abstract way of consuming data from a source. Take arrays, for example:

```javascript
let arr = [1,2,3];

// for of consumes an iterator
for (const val of arr) {
    console.log(val); // 1, 2, 3
}
```

That's nifty, but you could just as easily done that with a traditional for loop.

```javascript
for (let i = 0; i < arr.length; i++) { ... }
```

Arrays are familiar to use, we know how to use them. Where iterators really shine is when we get some data type that we know nothing about. Rather than learning the internals of how that data type works, the data type can simply give us an iterator that we communicate with.
For example, let's build an iterator that gives us a random number of Mega Man bosses:

```javascript
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
```

We simply implement the iterable interface by specifying a function on the object whose name is `Symbol.iterator`. Check out the spec for more info on Symbols. tl;dr, they are unique, so regardless of which iterable we consume, we can be sure that `Symbol.iterator` will always be the same value in Javascript.

The funtion simply returns an object which implements a method called `next`. That's all that's required to implement the iterable interface. This `next` method returns objects of type
```javascript
 { value: any;
   done: boolean;}
```

Whenever it wants to signal that it has no more data, it simply sets `done` to `true`. 

And that's it! That's how you define your own iterator. Take a look at the `generators` tutorial to discover some easier ways of generating iterators.

Notice something else about our megamanBosses iterator. We don't know ahead of time how many values it's going to produce. This iterator is consumed synchronously, but since we don't know of the number of values ahead of time, it's not too much of a stretch to imagine an iterator which abstracts asynchronous operations, like network calls, which arrive over time. More on this later... 