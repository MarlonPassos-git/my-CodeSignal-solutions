function solution(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number {
  const euPossoLevarDoisItem = (weight1 + weight2) <= maxW

  if (euPossoLevarDoisItem) {
    return value1 + value2
  }

  const lista = [
    {
      value: value1,
      weight: weight1
    },
    {
      value: value2,
      weight: weight2
    }
  ]

  const valoresQueEuConsigoCarregar = lista.filter(({ weight }) => weight <= maxW)
  const naoConsigoCarregarNenhum = valoresQueEuConsigoCarregar.length === 0

  if (naoConsigoCarregarNenhum) return 0

  return valoresQueEuConsigoCarregar.reduce((maisCaro, { value }) => { 
    const currentEmaior = value > maisCaro

    return currentEmaior ? value : maisCaro
  }, -Infinity)
   
}

solution(
  15,
  2,
  20,
  3,
  2
)