import {  sumForIndex } from './arrayMaxConsecutiveSum'

describe('describe', () => {
  it('unit - sumForIndex', () => {
    const array = [0, 1, 2,3,4,5]
    expect(sumForIndex({
      index: 0,
      list: array,
      range: 3
    })).toEqual(3)
  })
})
