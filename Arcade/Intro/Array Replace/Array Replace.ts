function solution1(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    
    const inputArrayReplace = inputArray.map(number => (number == elemToReplace) ? substitutionElem : number)
  
    return inputArrayReplace
}
 
