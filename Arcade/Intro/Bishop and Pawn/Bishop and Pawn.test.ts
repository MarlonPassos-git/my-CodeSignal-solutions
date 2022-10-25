import { Move } from './Bishop and Pawn'

describe('estouLimite', () => {
  it('direita possivel', () => {
    expect(Move.right('a8')).toEqual("b8")
  })

  it('direita impossivel', () => {
    expect(Move.right('h8')).toEqual(null)
  })

   it('esquerda impossivel', () => {
    expect(Move.left('a8')).toEqual(null)
  })

  it('esquerda possivel', () => {
    expect(Move.left('h8')).toEqual("g8")
  })
  
  it('top impossivel', () => {
    expect(Move.top('a8')).toEqual(null)
  })

  it('top possivel', () => {
    expect(Move.top('h1')).toEqual("h2")
  })
  
  it('bottom impossivel', () => {
    expect(Move.bottom('h1')).toEqual(null)
  })

  it('bottom possivel', () => {
    expect(Move.bottom('h2')).toEqual("h1")
  })

  it('diagonal cima direita possivel', () => {
    expect(Move.diagonalTopRight('a1')).toEqual("b2")
  })

  it('diagonal cima direita impossivel por cima', () => {
    expect(Move.diagonalTopRight('a8')).toEqual(null)
  })

  it('diagonal cima direita impossivel pelo lado', () => {
    expect(Move.diagonalTopRight('h1')).toEqual(null)
  })

  it('diagonal cima direita impossivel pelos dois lados', () => {
    expect(Move.diagonalTopRight('h8')).toEqual(null)
  })

  it("diagonal cima esquerda possivel", () => { 
    expect(Move.diagonalTopLeft('h1')).toEqual("g2")
  })

  it("diagonal cima esquerda impossivel por cima", () => {
    expect(Move.diagonalTopLeft('h8')).toEqual(null)
  })

  it("diagonal cima esquerda impossivel pelo lado", () => {
    expect(Move.diagonalTopLeft('a1')).toEqual(null)
  })

  it("diagonal cima esquerda impossivel pelos dois lados", () => {
    expect(Move.diagonalTopLeft('a8')).toEqual(null)
  })

  it("diagonal baixo direita possivel", () => {
    expect(Move.diagonalBottomRight('a8')).toEqual("b7")
  })

  it("diagonal baixo direita impossivel por baixo", () => {
    expect(Move.diagonalBottomRight('a1')).toEqual(null)
  })

  it("diagonal baixo direita impossivel pelo lado", () => {
    expect(Move.diagonalBottomRight('h8')).toEqual(null)
  })

  it("diagonal baixo direita impossivel pelos dois lados", () => {
    expect(Move.diagonalBottomRight('h1')).toEqual(null)
  })

  it("diagonal baixo esquerda possivel", () => {
    expect(Move.diagonalBottomLeft('h8')).toEqual("g7")
  })

  it("diagonal baixo esquerda impossivel por baixo", () => {
    expect(Move.diagonalBottomLeft('h1')).toEqual(null)
  })

  it("diagonal baixo esquerda impossivel pelo lado", () => {
    expect(Move.diagonalBottomLeft('a8')).toEqual(null)
  })

  it("diagonal baixo esquerda impossivel pelos dois lados", () => {
    expect(Move.diagonalBottomLeft('a1')).toEqual(null)
  })
})
