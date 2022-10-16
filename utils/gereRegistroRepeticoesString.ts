export function gereRegistroRepeticoesString(str: string): Record<string, number> { 
  return str.toLowerCase().split('').sort().reduce((registroletras, letra) => { 
    const essaLetraJaFoiCadastrada = registroletras.hasOwnProperty(letra) 
    if (essaLetraJaFoiCadastrada) {
      registroletras[letra]++
    }
    else { 
      registroletras[letra] = 1
    }
    return registroletras
  
  }, {} as Record<string, number>) 
}
