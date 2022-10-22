function solution(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number {
  const euPossoLevarDoisItem = (weight1 + weight2) < maxW

  if (euPossoLevarDoisItem) { 
    return value1 + value2
  }

  const primeiroCustaMais = value1 >= value2
  
  if (primeiroCustaMais) { 
    const ConsigoCarregar = value1 <= maxW

    if (ConsigoCarregar) return value1 
  }
  return value2

}

