function solution(n: number): boolean {
    const listNumbers = String(n).split('')
    const returnedSomeNumber = listNumbers.find(number => !isEven(+number))
    const onlyHaveEvenNumbers = (returnedSomeNumber) ?  false : true
    
    return onlyHaveEvenNumbers   
}
 
function isEven(number: number):boolean {
    const _isEven = ((number % 2) == 0) ? true : false 
    
    return _isEven
}
 
