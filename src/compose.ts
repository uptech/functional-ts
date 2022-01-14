/**
 * Composes the given functions into a function chain.
 *
 * The resulting composed function implements the function chain where then
 * result of f() is passed as input to g() for which the return value of g()
 * is return from the composed function.
 *
 * ```TypeScript
 * const uppercaseAndDashSeparate = compose(uppercase, dashSeparate)
 * uppercaseAndDashSeparate('Bob') // => 'B-O-B'
 * ```
 *
 * In the above example we `compose` the `uppercase` function together with the
 * `dashSeparate` function to create a new function called
 * `uppercaseAndDashSeparate`. This is a contrived example but this is an
 * extremely valuable utility. In fact it is the basis of the `pipe` function as
 * well.
 *
 * @param f function of form (A) -> B
 * @param g function of form (B) -> C
 * @typeParam A input type for the `f` function
 * @typeParam B input type for the `g` function
 * @typeParam C return type for the `g` function & composed function
 * @returns composed function implementing chain of form (A) -> C
 */
export function compose<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
  return (a: A) => {
    return g(f(a))
  }
}
