const prompt = require('prompt-sync')();

let sudokuGrid = []
let sudokuWidth = 9


const lineIsLegal = (line) => {
    let cleansedLine = line.filter(el => el != "x" && el != "X")
    cleansedLine.sort()

    for(let i = 0; i < cleansedLine.length - 1; ++i) {
        if(cleansedLine[i] == cleansedLine[i+1] || parseInt(cleansedLine[i]) > sudokuWidth) {
            return false
        }
    }    
    if(parseInt(cleansedLine[cleansedLine.length-1]) > sudokuWidth) {
        return false
    }
    return true
}


const columnsAreLegal = () => {
    for(let colNum = 0; colNum < sudokuWidth; ++colNum) {
        let columnToTest = ""
        for(let rowNum = 0; rowNum < sudokuWidth; ++rowNum) {
            columnToTest += sudokuGrid[rowNum][colNum]
        }
        let columnLegal = lineIsLegal(columnToTest.split(""))
        if(!columnLegal) {
            return false
        }
    }
    return true
}


const getInput = () => {
    console.log(`Please enter the ${sudokuWidth} rows. \nThere's ${sudokuWidth} chars per line and only numbers or X are allowed(ie. 134X5XX9X)`)
    
    for(let i = 0; i < sudokuWidth; ++i) {
        const legalInput = ["1","2","3","4","5","6","7","8","9","x","X"]
        let row = prompt("Please enter row no." + (i+1) + ": ");
        row = row.split("").filter(el => legalInput.includes(el))
        if(row.length != sudokuWidth) {
            console.error("You've used ", row.length, `chars instead of ${sudokuWidth}, please try again`)
            --i
        } else {
            const rowLegal = lineIsLegal(row)
            if(!rowLegal) {
                console.error("This row is not legal, please try again.")
                --i
            } else {
                sudokuGrid[i] = row
            }
        }
    }
    
    if(!columnsAreLegal()) {
        console.error("The sudoku grid is not legal please try again\n\n") 
        sudokuGrid = []
        getInput()
    }
}



const sudokuOutput = (message) => {
    console.log("\n" + message)
    
    for(row of sudokuGrid) {
        let output = ""
        for(char of row) {
            output += char + " "
        }
        console.log(output)
    }
}


const solveSudoku = () => {
    console.log("solved sudoku")
    //for(row of sudokuGrid)
}


const main = () => {    
    getInput()
    sudokuOutput("Your Sudoku:")
    solveSudoku()
    sudokuOutput("Your solved Sudoku:")
}

main()