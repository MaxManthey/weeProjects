const prompt = require('prompt-sync')();

let user = undefined

module.exports = function (userObj) {
    user = userObj
    printNewLines(3)
    console.log('Welcome ' + user.username)
    printNewLines(1)
    mainFunctionality()
}


const mainFunctionality = () => {
    const possibleOptions = [1,2,3,4]
    
    console.log('What do you want to do?')
    console.log('(1) Rent a book')
    console.log('(2) Return a book')
    console.log('(3) Account settings')
    console.log('(4) Exit')
    
    const choosenOption = parseInt(prompt('Please enter a number: '));
    if(possibleOptions.includes(choosenOption)) {
        switch(choosenOption) {
            case 1:
                rentABook()
                break;
            case 2:
                returnABook()
                break;
            case 3:
                accountSettings()
                break;
            case 4:
                exitApp()
                break;
        }
    } else {
        printNewLines(1)
        console.log("Input was not an option")
        printNewLines(3)
        mainFunctionality()
    }
}


const rentABook = () => {
    console.log('Rent book')
    mainFunctionality()
}


const returnABook = () => {
    console.log('Return a book')
    mainFunctionality()
}


const accountSettings = () => {
    console.log('Account settings')
    mainFunctionality()
}


const exitApp = () => {
    printNewLines(2)
    console.log('Goodbye!')
    printNewLines(2)
    process.exit(1)
}


const printNewLines = (amount) => {
    let toPrint = ''
    for(let i = 0; i < amount; ++i) {
        toPrint += '\n'
    }
    console.log(toPrint)
}