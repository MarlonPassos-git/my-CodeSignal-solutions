function minesweeper(matrix: boolean[][]): number[][] { 
    let matrixFinal = new MinesWeeper(matrix)
    return matrixFinal.getMatrixFinal()
}
 
class MinesWeeper {
    public matrix: boolean[][];
    public rows: number;
    public columns: number;
    public matrixFinal: Array<Array<any>>
    
    constructor(matrix: boolean[][]) {
        this.matrix = matrix;
        this.rows = matrix.length;
        this.columns = matrix[0].length;
        this.matrixFinal = this.createFinalMatrix(this.rows)
    }
    
    createFinalMatrix (rows: number):any[][] {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push([])
        }
        return matrix
    }
    
    traverseMatrix() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {    
                const totalAdjacentBombs =  this.checkBombs(row, column)
                this.matrixFinal[row][column] = totalAdjacentBombs
            }
        }
        return this.matrixFinal
    }
    
    getMatrixFinal() { 
        return this.traverseMatrix()
    }
    
    checkBombs(row: number, column: number) { 
        const adjacentElements = [
            this.checkEdges(row, column - 1),
            this.checkEdges(row, column + 1),
            this.checkEdges(row + 1, column - 1),
            this.checkEdges(row + 1, column),
            this.checkEdges(row + 1, column + 1),
            this.checkEdges(row - 1, column - 1),
            this.checkEdges(row -1, column),
            this.checkEdges(row - 1, column + 1)
        ]
        const totalAdjacentBombs = this.totalAdjacentBombs(adjacentElements)
        return totalAdjacentBombs
    }
    
    checkEdges(row: number, column: number) {
        if (row < 0 || column < 0) {
        return false
        } 
        else if (this.matrix[row] == undefined ||  this.matrix[row][column] == undefined) {
            return false 
        }
        return this.matrix[row][column]
    }
    
    totalAdjacentBombs(array:Array<boolean>):number {
        const totalAdjacentBombs = array.reduce((tot, hasBomb)=> {
            return (hasBomb) ? ++tot : tot
        }, 0 )  
        return totalAdjacentBombs
    }
}
 
 
