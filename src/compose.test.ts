import { compose } from './compose'

test('compose two functions together', () => {
  const funcA = (v: number): string => {
    return `${v}`
  }
  const funcB = (v: string): string => {
    return `hello-${v}`
  }
  const funcC = compose(funcA, funcB)
  expect(funcC(23)).toBe('hello-23')
})

test('compose three functions together', () => {
  const funcA = (v: number): string => {
    return `${v}`
  }
  const funcB = (v: string): string => {
    return `hello-${v}`
  }
  const funcC = (v: string): string => {
    return `goodbye-${v}`
  }
  const funcD = compose(funcA, funcB, funcC)
  expect(funcD(23)).toBe('goodbye-hello-23')
})
