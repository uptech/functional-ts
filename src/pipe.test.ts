import { pipe } from './pipe'

test('pipe value into one function', () => {
  const funcA = (v: number): string => {
    return `${v}`
  }
  expect(pipe(23, funcA)).toBe('23')
})

test('pipe value into chain of two functions', () => {
  const funcA = (v: number): string => {
    return `${v}`
  }
  const funcB = (v: string): string => {
    return `hello-${v}`
  }
  expect(pipe(23, funcA, funcB)).toBe('hello-23')
})

test('pipe value into chain of three functions', () => {
  const funcA = (v: number): string => {
    return `${v}`
  }
  const funcB = (v: string): string => {
    return `hello-${v}`
  }
  const funcC = (v: string): string => {
    return `goodbye-${v}`
  }
  expect(pipe(23, funcA, funcB, funcC)).toBe('goodbye-hello-23')
})
