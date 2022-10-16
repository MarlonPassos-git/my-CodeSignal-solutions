function solution( listNumbers :number[]): number {

    let lowestResultNumbers = [];
    let lowestNumber = Infinity
    const calculateAbsoluteNumberArrayCache = cache(calculateAbsoluteNumberArray)

    for (let number of listNumbers) {
        const totAbs = calculateAbsoluteNumberArrayCache(number)
        
        if (totAbs < lowestNumber) {
            lowestNumber = totAbs
            lowestResultNumbers = [number]
        }
        else if (totAbs === lowestNumber ) {
            if (!lowestResultNumbers.includes(number)) { 
                lowestResultNumbers.push(number)
            }
        }

        console.log(lowestResultNumbers)
    }

    lowestResultNumbers.sort((a, b) => a - b)

    return lowestResultNumbers[0]


    function calculateAbsoluteNumberArray(subtractionNumber: number): number{ 
        let numberAbsolute = listNumbers.reduce((total, number) => { 
            
            const absNumber = Math.abs(number - subtractionNumber) 
            
            return absNumber + total
        }, 0)

        return numberAbsolute
    }
}



function cache (func: Function) {

    let historico = new Map()

    return function (x: any){
        
        if(historico.has(x)) {
            return historico.get(x) 
        }
        let resultado = func(x)    
        historico.set(x, resultado)
        return historico.get(x)          
    }
}





