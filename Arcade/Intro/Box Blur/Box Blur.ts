function boxBlur(image: number[][]): number[][] {
    
    const [width, height] = finalArraySize(image)
    const matrix = createMatrix(height) 
    
    for (let i = 0; i < height ;i++) {
        for (let j = 0;j < width ;j++) {
            
            const listNumbers = selectMatrix3x3(i, j , image)
            const average = averageArry(listNumbers)
            matrix[i][j] = average
        }  
    }   
    return matrix
}

function selectMatrix3x3(y:number, x:number, array:Array<Array<number>>): Array<number> {
    const listNumbers = [
        array[y][x],
        array[y][x + 1],
        array[y][x + 2],
        array[y + 1][x],
        array[y + 1][x + 1],
        array[y + 1][x + 2],
        array[y + 2][x],
        array[y + 2][x + 1],
        array[y + 2][x + 2],    
    ]
    return listNumbers
}

// Criar uma função que recebe uma matriz 3x3 e retorna a media entre valores dessa matriz 
function averageArry(array: Array<number>):number {
    const arrayLength = array.length
    const arrayTotalSum = array.reduce((total: number, number: number)=> {
        return total + number
    }, 0)
    const average = Math.trunc(arrayTotalSum / arrayLength)
    return average
}

// Criar algo vai definir o tamanho da minha matriz de retorno 
function finalArraySize (array: Array<any>):Array<number>  {
    const width = array[0].length - 2;
    const height = array.length -2 
    return [width, height]
}

// Criar algo que junte todos os retornos da segunda função e retorne uma matriz 
function createMatrix(height:number ):number[][] {
        let matrix = [];
        for (let i = 0; i < height; i++) {
            matrix.push([])
        }
        return matrix
}
