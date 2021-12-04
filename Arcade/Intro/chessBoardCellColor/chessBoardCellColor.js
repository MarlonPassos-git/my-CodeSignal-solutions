function solution(cell1: string, cell2: string): boolean {
    const celularCor1 = corCelulaTabuleiro(cell1)
    const celularCor2 = corCelulaTabuleiro(cell2)
    const eigual = celularCor1 == celularCor2;
    
    return eigual
}
 
function corCelulaTabuleiro(posicaoDupla: string) {
    const posicao1 = +posicaoDupla[1]
    const posicao2 = +posicaoAlfabeto(posicaoDupla[0])
    let corCelula = ''
    
    if (epar(posicao1) == epar(posicao2)) {
        corCelula = 'preto'
    }
    else {
        corCelula = 'branco'
    }
    return corCelula
} 
 
function posicaoAlfabeto(letra: string): number {
    const numeroASCII = (letra.toLowerCase()).charCodeAt(0);
    const posicaoLetraAlfabeto = numeroASCII - 96; 
    
    return posicaoLetraAlfabeto
}
 
function epar(numero: number) {
    return (numero % 2) == 0
}
 
