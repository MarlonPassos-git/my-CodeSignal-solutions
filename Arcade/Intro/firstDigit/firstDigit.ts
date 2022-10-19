export function solution(inputString: string): string | undefined {
  const regExp = /\d/
  const fristNumber = regExp.exec(inputString)
  
  if (!fristNumber) return undefined

  return fristNumber[0]
}

