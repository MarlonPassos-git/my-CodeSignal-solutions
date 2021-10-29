function sortByHeight(a) {

    const tree_position = []
    const organized_list = a.filter((height, index) => {

        if (height == -1) {
            tree_position.push(index)
            return false
        }
        return true
    })

    organized_list.sort((a, b) => a - b)

    tree_position.forEach((position) => {
        organized_list.splice(position, 0, -1)
    })

    return organized_list

}

function sortByHeight2(a) { // sort by height more otimized

    let finish = 0

    check: for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - finish; j++) {

            if (a[j] == -1) continue

            if (a[j + 1] == -1) {

                let followed = 1
                while (a[j + followed] == -1) {
                    followed++
                }

                if (a[j] > a[j + followed]) {
                    [a[j + followed], a[j]] = [a[j], a[j + followed]]
                }
            } else if (a[j] > a[j + 1]) {
                [a[j + 1], a[j]] = [a[j], a[j + 1]]
            }
        }
        finish++
    }
    return a
}