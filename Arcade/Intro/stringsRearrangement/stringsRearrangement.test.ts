import {  totalLetrasDiferentes, possibilidadeEValida } from "./stringsRearrangement";

const carro = 0
describe('stringsRearrangement.ts', () => {
  it('deve retornar apenas 1 letra diferente', () => {
    
    expect(totalLetrasDiferentes('ab', 'aa')).toBe(1)
  });

  it('deve retornar apenas 0 letra diferente', () => {
    
    expect(totalLetrasDiferentes('cd', 'dc')).toBe(2)
  })

  it('deve retornar apenas 3 letra diferente', () => {
    
    expect(totalLetrasDiferentes('qdrabc', 'eampbc')).toBe(4)
  })
});

describe('unit - essaPossibilidadeEValida', () => {
  it('Deve retornar false', () => {
    
    expect(possibilidadeEValida(['aaa', 'bbb', 'ccc'])).toBeFalsy()
  });

  it('Deve retornar true', () => { 
    expect(possibilidadeEValida(['abb', 'bbb', 'bbc'])).toBeTruthy()
  })
})
