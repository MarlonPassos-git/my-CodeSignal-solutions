import { isDesiredHeight } from './growingPlant'

describe('unit - isDesiredHeight', () => {
  it('deve ser false de o current for menor do que desired', () => {
    
    expect(isDesiredHeight(10, 12)).toEqual(false)
  })

  it('deve ser true de o current for maior do que desired', () => {

    expect(isDesiredHeight(100, 12)).toEqual(true)
  })

  it('Se os dois forem iguais deve dar true', () => {

    expect(isDesiredHeight(100, 100)).toEqual(true)
  })
})
