function solution(inputString: string): string {
    
    let novaPalavra = ''
    
    for (let letra of inputString) {
        novaPalavra += retornaProximaLetra(letra)
    }
    return novaPalavra
}
 
 
function retornaProximaLetra(letra: string): string {
    let numeroASCII = letra.charCodeAt(0) 
        const Z_numeroASCII = 122;
        if (numeroASCII == Z_numeroASCII) {
            numeroASCII = 96
        }
        const novaLetra = String.fromCharCode(numeroASCII+1)
        
        return novaLetra
}
 
