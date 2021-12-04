function solution(n: number, firstNumber: number): number {
    const metadeNumeros = n / 2;
    let soma = firstNumber + metadeNumeros
    
    if (soma >= n) {
        soma -= n
    }
    
    return soma
    
    
}
 
