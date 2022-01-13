import { compose } from './compose';

test("compose two functions together", () => {
	const funcA = (v: number): string => { return `${v}`; };
	const funcB = (v: string): string => { return `hello-${v}`; };
  const funcC = compose(funcA, funcB)
	expect(funcC(23)).toBe('hello-23');
});

