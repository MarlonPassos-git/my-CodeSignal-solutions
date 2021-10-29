function arrayChange(inputArray) {
    
    let array = [...inputArray]
    let totalAdditions = 0;
    
    for (let i = 1; i < array.length; i++) {
        let previousNumber = array[i -1];
        let currentNumber = array[i]
        
        if (previousNumber >= currentNumber) {
            let difference = previousNumber - currentNumber;       
            array[i] += difference + 1;
            totalAdditions += difference + 1;
        }
    } 
    return totalAdditions
}
 
