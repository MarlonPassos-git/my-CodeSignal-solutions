import { gereRegistroRepeticoesString } from "./gereRegistroRepeticoesString"

describe('gereRegistroRepetico', () => {
  it('Deve retornar um registro basico', () => {
    
    expect(gereRegistroRepeticoesString('abcde')).toEqual({
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1
    })
  })

  it('Deve lidar com valores iguais', () => {
    expect(gereRegistroRepeticoesString('aaaaae')).toEqual({
      a: 5,
      e: 1,
    })
  })
})
