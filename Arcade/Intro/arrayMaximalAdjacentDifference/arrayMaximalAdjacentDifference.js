function arrayMaximalAdjacentDifference(inputArray) {
    
    let maxDifference = 0;
    
    for (let i = 1; i < inputArray.length; i++) {
        
        const difference = Math.abs(inputArray[i - 1] - inputArray[i])
        maxDifference = Math.max(maxDifference, difference)   
    }
    
    return maxDifference
}
 
 
