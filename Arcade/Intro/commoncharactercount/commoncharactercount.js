function commonCharacterCount(s1, s2) {

    const string1 = unstructureWord(s1)
    const string2 = unstructureWord(s2)
    const string1_letters = Object.keys(string1);
    let total_equal_letters = 0;

    for (let letter of string1_letters) {

        if (string2[letter] != undefined) {
            total_equal_letters += Math.min(string1[letter], string2[letter])
        }
    }

    return total_equal_letters

}


function unstructureWord(word) {

    const unstructuredWord = {}

    for (let letter of word) {

        if (unstructuredWord[letter] == undefined) {
            unstructuredWord[letter] = 1
        } else {
            unstructuredWord[letter]++
        }
    }

    return unstructuredWord

}