let tot = 0

function solution(n: number): number {
  const temDuasCasas = n >= 10

  if (!temDuasCasas) return tot
  
  tot++
  const sumAccAndNumber = (acc: number, number: string) => acc + +number

  const somaListaNumeros = n
    .toString()
    .split("")
    .reduce(sumAccAndNumber, 0)
  
  return solution(somaListaNumeros)

}

solution(123)


/**
 * - 123
 * [x] transformar um numero em um string -> "123"
 * [x] Dividir cada a string em varios numeros  -> [1, 2, 3]
 * [x] Somar tudo -> 6
 * [ ] Verificar se esse numero tem mais do que 2 casas 
 *  [ ] SIM - Repetir todo o processo
 *  [ ] NÃO - Retorna o numero 
 */