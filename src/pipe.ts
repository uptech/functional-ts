import { compose } from './compose'

/**
 * Pipes a value through a chain of functions.
 *
 * ```TypeScript
 * pipe('Bob', uppercase, dashSeparate) // => 'B-O-B'
 * ```
 *
 * In the above example we have a chain of two functions, `uppercase` and
 * `dashSeparate`. The input, `'Bob'` is passed into the `uppercase` function
 * as input and then the output from `uppercase` is piped as input to the
 * `dashSeparate` function. Then the output from `dashSeparate` is returned as
 * the return value of `pipe` in this example.
 *
 * @param f function of form (A) -> B
 * @param g function of form (B) -> C
 * @typeParam A input type for the `f` function & initial pipe input
 * @typeParam B input type for the `g` function & output type of function `f`
 * @typeParam C return type for the `g` function & `pipe`
 * @returns output from the function chain
 */
export function pipe<A, B, C>(a: A, f: (a: A) => B, g: (b: B) => C): C {
  return compose(f, g)(a)
}
