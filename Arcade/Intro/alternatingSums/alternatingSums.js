function alternatingSums(arry) {

    const teams = [0, 0]

    arry.forEach((grupo, index) => {

        if (isOdd(index)) {
            teams[1] += grupo
        } else {
            teams[0] += grupo
        }
    })
    return teams
}

function isOdd(number) {
    return (number % 2) == 1
}