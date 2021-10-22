function allLongestStrings(inputArray) {

    let max_string_size = 0;
    let big_string_list = [];
    
    for (let string of inputArray) {
        const string_size = string.length
        
        if (string_size > max_string_size) {
            big_string_list = [string]
            max_string_size = string_size
        }
        else if (string_size == max_string_size) {
            big_string_list.push(string)
        }
    }
    return big_string_list
}