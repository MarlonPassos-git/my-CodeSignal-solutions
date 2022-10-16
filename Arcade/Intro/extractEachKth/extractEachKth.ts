function solution(inputArray: number[], k: number): number[] {
  let nextUmpteenthNumber = k
  const inputWithOutK = inputArray.reduce((previousValue, currentValue, currentIndex) => { 
    const isUmpteenthOfK = nextUmpteenthNumber === currentIndex + 1;

    if (isUmpteenthOfK) {
      nextUmpteenthNumber += k
    } else { 
      previousValue.push(currentValue)
    }
    return previousValue
  }, [] as number[])

  return inputWithOutK
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) //
