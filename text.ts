function solution(inputArray: string[]): boolean {

    return loopArrays("", inputArray);
}

solution(["aba", 
 "bbb", 
 "bab"])

function loopArrays (currentStr: string, listStr: string[]): boolean {

    
    if (listStr.length === 0) return true;

    let canRearrange = false;
    for (let i = 0 ; i < listStr.length ; i ++) {
        const wordToCaparacao = listStr[i]

        const hasOnlyOneDifferenc = countDiffChar(currentStr, wordToCaparacao) == 1
        if (hasOnlyOneDifferenc) {
            let clonedArray = [...listStr];
            // remove a string de comparação nesse array 
            clonedArray.splice(i, 1);
            clonedArray
            if (loopArrays(wordToCaparacao, clonedArray)) { 
                canRearrange = true
            };
        }
    }
    return canRearrange;
}

function countDiffChar (str1: string, str2: string): number {

    if (str1 === "") return 1;
    let count = 0;
    for (let i = 0 ; i < str1.length ; i ++) {
        if (str1.charAt(i) !== str2.charAt(i)) count ++;
    }
    return count;
}

// gera um numero aleatorio de 0 a 1000
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
    
