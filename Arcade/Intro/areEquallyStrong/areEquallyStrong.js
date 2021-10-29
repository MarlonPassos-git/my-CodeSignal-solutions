function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yourArms = `${yourLeft}${yourRight}`
    const friendArms = `${friendsLeft}${friendsRight}`
    const friendArmsReverse = `${friendsRight}${friendsLeft}`
    
    const equalForces = (yourArms == friendArms) || (yourArms == friendArmsReverse)
    return equalForces
}
 
