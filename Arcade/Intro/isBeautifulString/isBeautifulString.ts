const CHAR_CODE_LETTER_A = 97
const CHAR_CODE_LeTTER_Z = 122

function solution(inputString: string): boolean {
  let currentCharCode = CHAR_CODE_LETTER_A - 1
  let maxLit = Infinity
  let totalLetterCountability = 0

  do {
    currentCharCode++

    if (!inputHasThisLetter()) return false
    if (totalRepeatedLettersInCurrentLetter() > maxLit) return false

    totalLetterCountability++
    maxLit = totalRepeatedLettersInCurrentLetter()
  } while (!areAllLettersCountability())

  return true

  function inputHasThisLetter() {
    return inputString.includes(charCodeToString(currentCharCode))
  }

  function getTotalRepeatedLetters(letter: string) {
    return inputString
      .toLowerCase()
      .match(selectAllOccurrencesOfThisLetter(letter))!
      .length
  }

  function totalRepeatedLettersInCurrentLetter() {
    return getTotalRepeatedLetters(charCodeToString(currentCharCode))
  }

  function charCodeToString(charCode: number) {
    return String.fromCharCode(charCode)
  }

  function selectAllOccurrencesOfThisLetter(letter: string) {
    return new RegExp(letter.toLowerCase(), "g")
  }

  function getTotalUniqWordsInInput() {
    return [...new Set(inputString)].length
  }

  function areAllLettersCountability() {
    return totalLetterCountability === getTotalUniqWordsInInput()
  }
}








console.log(solution('bbbaacdafe') === true); 
