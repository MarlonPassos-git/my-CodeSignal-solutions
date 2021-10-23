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