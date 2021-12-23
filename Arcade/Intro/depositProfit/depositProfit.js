function solution(deposit: number, rate: number, threshold: number): number {
 
    let totalYears = 0;
    let totalMoney = deposit;
    const fees = rate * 0.01
 
    while (totalMoney < threshold) { 
        totalMoney += totalMoney * fees
        totalYears++
    }
 
    return totalYears
}
 
 
