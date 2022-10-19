function solution(str: string): number {
  const letter = new Set(str)

  return letter.size
}

solution("cabca")