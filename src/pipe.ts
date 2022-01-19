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
 * @param h function of form (C) -> D
 * @typeParam A input type for the `f` function & initial pipe input
 * @typeParam B input type for the `g` function & output type of function `f`
 * @typeParam C return type for the `g` function & `pipe`
 * @typeParam D return type for the `h` function & `pipe`
 * @returns output from the function chain
 */
export function pipe<A>(a: A): A
export function pipe<A, B>(a: A, f: (a: A) => B): B
export function pipe<A, B, C>(a: A, f: (a: A) => B, g: (b: B) => C): C
export function pipe<A, B, C, D>(
  a: A,
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D,
): D

export function pipe(
  a: unknown,
  f?: Function,
  g?: Function,
  h?: Function,
): unknown {
  switch (arguments.length) {
    case 1:
      return a
    case 2:
      return f!(a)
    case 3:
      return g!(f!(a))
    case 4:
      return h!(g!(f!(a)))
  }
}
