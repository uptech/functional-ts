import { pipe } from './pipe';

test("pipe value into chain of two functions", () => {
	const funcA = (v: number): string => { return `${v}`; };
	const funcB = (v: string): string => { return `hello-${v}`; };
	expect(pipe(23, funcA, funcB)).toBe('hello-23');
});
