# functional-ts

This is a TypeScript library that provides key utilities to make writing TypeScript code in a functional style easier.

*Note:* This is a specific boutique library catered to the functional features we use here at [UpTech][uptech] and it isn't intended in anyway to be a giant complete library for all things funtional.

## Utilities

This library provides a number of utilities.

- `pipe`
- `compose`

### pipe

The `pipe` function facilitates pipeing a value through a chain of functions. The usage looks as follows:

```TypeScript
pipe('Bob', uppercase, dashSeparate) // => 'B-O-B'
```

In the above example we have a chain of two functions, `uppercase` and `dashSeparate`. The input, `'Bob'` is passed into the `uppercase` function as input and then the output from `uppercase` is piped as input to the `dashSeparate` function. Then the output from `dashSeparate` is returned as the return value of `pipe` in this example.

### compose

The `compose` function composes the given functions into a new function that chaines the output of the previous function into the input of the following function.

```TypeScript
const uppercaseAndDashSeparate = compose(uppercase, dashSeparate)
uppercaseAndDashSeparate('Bob') // => 'B-O-B'
```

In the above example we `compose` the `uppercase` function together with the `dashSeparate` function to create a new function called `uppercaseAndDashSeparate`. This is a contrived example but this is an extremely valuable utility. In fact it is the basis of the `pipe` function as well.

## Development

For details on how to developer this project and contribute please see the DEVELOPMENT.md file.

## License

`functional-ts` is Copyright © 2022 UpTech Works, LLC. It is free software, and may be redistributed under the terms specified in the LICENSE file.

## About <img src="http://upte.ch/img/logo.png" alt="uptech" height="48">

`functional-ts` is maintained and funded by [UpTech Works, LLC][uptech], a
software design & development agency & consultancy.

We love open source software. See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://github.com/uptech
[hire]: http://upte.ch
[uptech]: http://upte.ch
