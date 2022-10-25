const letras = ["a", "b", "c", "d", "e", "f", "g", "h"]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

export class Move {

  static right(position: Position | null) {
    if (position === null) return null
    const [letter, number] = position.split('')
    const indexLetter = letras.indexOf(letter)
    const nextLetter = letras[indexLetter + 1]
    const existNextLetter = nextLetter!!

    return existNextLetter ? `${nextLetter}${number}` as Position : null
  }

  static left(position: Position | null) {
    if (position === null) return null
    const [letter, number] = position.split('')
    const indexLetter = letras.indexOf(letter)
    const nextLetter = letras[indexLetter - 1]
    const existNextLetter = nextLetter!!

    return existNextLetter ? `${nextLetter}${number}` as Position : null
  }

  static top(position: Position | null) {
    if (position === null) return null
    const [letter, number] = position.split('')
    const indexNumber = numeros.indexOf(+number)
    const nextNumber = numeros[indexNumber + 1]
    const existNextLetter = nextNumber!!

    return existNextLetter ? `${letter}${nextNumber}` as Position : null
  }

  static bottom(position: Position | null) {
    if (position === null) return null
    const [letter, number] = position.split('')
    const indexNumber = numeros.indexOf(+number)
    const nextNumber = numeros[indexNumber - 1]
    const existNextLetter = nextNumber!!

    return existNextLetter ? `${letter}${nextNumber}` as Position : null
  }

  static diagonalTopRight(position: Position) {
    return Move.top(Move.right(position))
  }

  static diagonalTopLeft(position: Position) {
    return Move.top(Move.left(position))
  }

  static diagonalBottomRight(position: Position) {
    return Move.bottom(Move.right(position))
  }

  static diagonalBottomLeft(position: Position) {
    return Move.bottom(Move.left(position))
  }
}

class BispMove { 
  currentPosition: Position

  constructor(currentPosition: Position) { 
    this.currentPosition = currentPosition
  } 

  getAllDiagonalTopRight() { 
    const totos: string[] = []
    
    let nextPosition = Move.diagonalTopRight(this.currentPosition)
    while (nextPosition) {
      totos.push(nextPosition)
      nextPosition = Move.diagonalTopRight(nextPosition)
    }
    
    return totos.length > 0 ? totos : null
    

  }
}

const bispMove = new BispMove('a1')
console.log(bispMove.getAllDiagonalTopRight())



interface IMove { 
  rigth(position: string): string | null 
  top(position: string): string | null
  bottom(position: string): string | null
  left(position: string): string | null
}

type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type Letters = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
type Position = `${Letters}${Numbers}`







export function estouLimite(letra: string, number: string) {
  
 }


function solution(bishop: string, pawn: string): boolean {
   const allPositions = 1

}

