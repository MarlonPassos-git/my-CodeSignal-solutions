/**
 * resultado esperado:
 * [
 *  ["aaa", "bbb", "ccc"],
 * ["aaa", "ccc", "bbb"],
 * ["bbb", "aaa", "ccc"],
 * ["bbb", "ccc", "aaa"],
 * ["ccc", "aaa", "bbb"],
 * ["ccc", "bbb", "aaa"]
 * ]
 */
export function todasPossibilidades(list: string[]) {
    const result: string[][] = [];

    const permute = (arr: string[], m: string[] = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(list)
    return result;

}

export function totalLetrasDiferentes(word1: string, word2: string) { 
    let totalLetterDifferent = 0
    console.log('----------------')
    for (let i = 0; i < word1.length; i++) { 
        const letter1 = word1.charAt(i)
        const letter2 = word2.charAt(i)
        const isEqual = letter1 === letter2

        if (!isEqual) { 
            totalLetterDifferent++
        }
        
    }

    return totalLetterDifferent
}
const MAX_DIFERENCES = 1

export function possibilidadeEValida (wordList: string[]) { 
   for (let i = 1; i < wordList.length; i++) {
        const previewsWord = wordList[i - 1]
        const currentWord = wordList[i]
        const totalDiferences = totalLetrasDiferentes(previewsWord, currentWord)
        const isValid = totalDiferences <= MAX_DIFERENCES
       
        if (!isValid) return false
   }
    return true
}

possibilidadeEValida(["aaa", "bbb", "ccc"])
/* totalLetrasDiferentes('qdrabc', 'eampbc')
todasPossibilidades(["aaa", "bbb", "ccc"]) */

possivelOrganizarComUmaDiferencaApenas(["aaa", "bbb", "ccc"])

function possivelOrganizarComUmaDiferencaApenas(wordList: string[]) {
    const allPossibilities = todasPossibilidades(wordList)

    for (const possibilite of allPossibilities) {
        const isValid = possibilidadeEValida(possibilite)
        
        if (isValid) return true 
    }
    return false
}
