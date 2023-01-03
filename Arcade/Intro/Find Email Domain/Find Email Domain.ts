function solution(address: string): string {
  /** [see what this regExp do ](https://regex101.com/r/8Vr7PU/1) */
  const REG_EXP = /(?<=@)\w.*/

  return address.match(REG_EXP)![0]
}


solution("\"very.unusual.@.unusual.com\"@usual.com")