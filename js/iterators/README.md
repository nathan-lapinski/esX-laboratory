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

Arrays are familiar to use, we know how to use them. Where iterators really shine is when we get some data type that we know nothing about.