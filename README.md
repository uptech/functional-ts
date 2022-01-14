# functional-ts

This is a TypeScript library that provides key utilities to make writing TypeScript code in a functional style easier.

*Note:* This is a specific boutique library catered to the functional features we use here at [UpTech][] and it isn't intended in anyway to be a giant complete library for all things funtional.

## Utilities

### pipe

The `pipe` function facilitates pipeing a value through a chain of functions. The usage looks as follows:

```TypeScript
pipe('Bob', uppercase, dashSeparate) // => 'B-O-B'
```

In the above example we have a chain of two functions, `uppercase` and `dashSeparate`. The input, `'Bob'` is passinto the `uppercase` function as input and then the output from `uppercase` is piped as input to the `dashSeparate` function. Then the output from `dashSeparate` is returned as the return value of `pipe` in this example.

### compose

The `compose` function composes the given functions into a new function that chaines the output of the previous function into the input of the following function.

```TypeScript
const uppercaseAndDashSeparate = compose(uppercase, dashSeparate)
uppercaseAndDashSeparate('Bob') // => 'B-O-B'
```

In the above example we `compose` the `uppercase` function together with the `dashSeparate` function to create a new function called `uppercaseAndDashSeparate`. This is a contrived example but this is an extremely valuable utility. In fact it is the basis of the `pipe` function as well.

[UpTech]: https://upte.ch
