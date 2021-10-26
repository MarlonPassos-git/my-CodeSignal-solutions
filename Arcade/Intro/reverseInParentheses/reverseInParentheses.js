function reverseInParentheses(inputString) {

    let newString = inputString;
    const regExp_with_parentheses = /\(.*\)/;
    const regExp_no_parentheses = /(?<=\()\w+(?=\))/i;
    let hasParentheses = regExp_with_parentheses.test(inputString)

    while (hasParentheses) {
        let stringOrigin = newString.match(regExp_no_parentheses) ? . [0] ? ? "";

        if (stringOrigin == '') {
            newString = newString.replace(`()`, "")
        } else {
            let stringReverse = reverseString(stringOrigin)
            newString = newString.replace(`(${stringOrigin})`, stringReverse)
        }
        hasParentheses = regExp_with_parentheses.test(newString)
    }
    return newString
}

function reverseString(string) {

    let newString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}