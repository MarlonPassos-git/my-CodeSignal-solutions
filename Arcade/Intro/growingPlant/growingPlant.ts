export const isDesiredHeight = (current: number, desired: number) => current >= desired
  
function solutio1(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let currentHeight = 0 
  let day = 0

  while (true) {
    currentHeight += upSpeed
    day++
    
    if (isDesiredHeight(currentHeight, desiredHeight)) { 
      return day
    }

    currentHeight -= downSpeed
  }
}

function solution2(upSpeed, downSpeed, desiredHeight) {

  if (isDesiredHeight(upSpeed, desiredHeight)) return 1

  const quantoPrecisaCrescerSemContarPrimeiroDia = desiredHeight - upSpeed
  const quantoVaiCrescerPorDia = upSpeed - downSpeed

  return Math.ceil(quantoPrecisaCrescerSemContarPrimeiroDia / quantoVaiCrescerPorDia) + 1;
}

