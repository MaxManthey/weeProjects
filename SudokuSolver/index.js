const prompt = require('prompt-sync')();

let sudokuGrid = []

console.log("Please enter the rows (ie. 134X5XX9X)")
for(let i = 0; i < 9; ++i) {
    const legalInput = ["1","2","3","4","5","6","7","8","9","x","X"]
    const row = prompt("Please enter row no." + (i+1));
    row.split("").filter(el => legalInput.includes(el))
    sudokuGrid[i] = row.split("").map(el)
}