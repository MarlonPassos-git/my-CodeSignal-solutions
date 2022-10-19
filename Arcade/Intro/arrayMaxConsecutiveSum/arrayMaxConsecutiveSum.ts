function solution(inputArray: number[], k: number) {
  let max: number = -Infinity

  for (let index = 0; index < inputArray.length ; index++) { 
    const temEspaco = index + k <= inputArray.length 

    if (!temEspaco) continue 

    const sum = sumForIndex({
      index,
      list: inputArray,
      range: k
    })
    const hasMax = sum > max

    max = hasMax ? sum : max
  }
  return max
}

const array = [0, 1, 2, 3, 4, 5]

solution(array, 3)

type Props = {
  index: number,
  list: number[],
  range: number
}

export function sumForIndex({ index, list, range }: Props) { 
  let sum = 0 

  for (let i = index; i < index + range; i++) { 
    sum += list[i]  
  }

  return sum
}

  
sumForIndex({
  index: 0,
  list: array,
  range: 3
})