function palindromeRearranging(inputString) {
    
    const stringLength = inputString.length;
    const stringUnstructured = stringDestructor(inputString);
    
    let totalOddLetters = 0;
    
    for (totalLetters of Object.values(stringUnstructured)) {
        
        if (isOdd(totalLetters)) {
            totalOddLetters++ 
        }    
        if (totalOddLetters > 1) {
                return false
        }
    }
    
    return true
}
 
function stringDestructor(string) {
    
    const stringUnstructured = {}
    
    for (letter of string) {   
        stringUnstructured[letter] = (stringUnstructured[letter]) ? stringUnstructured[letter] + 1 : 1
    }
    return stringUnstructured
}
 
function isOdd(number) {
    
    const is = (number % 2) == 1; 
    
    return is
}
