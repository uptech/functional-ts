import { compose } from './compose';

export function pipe<A, B, C>(a: A, f: (a: A) => B, g: (b: B) => C): C {
	return compose(f, g)(a);
}
