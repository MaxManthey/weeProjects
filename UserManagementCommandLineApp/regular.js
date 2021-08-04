const prompt = require('prompt-sync')();

const mainFunctionality = require('./mainFunctionality')

let user = undefined

module.exports = function (userObj) {
    user = userObj
    printNewLines(3)
    console.log('Welcome ' + user.username)
    availableOptions()
}


const availableOptions = () => {
    const possibleOptions = [1,2,3,4]
    
    printNewLines(1)
    console.log('What do you want to do?')
    console.log('(1) Rent a book')
    console.log('(2) Return a book')
    console.log('(3) Account settings')
    console.log('(4) Exit')
    
    const choosenOption = parseInt(prompt('Please enter a number: '));
    if(possibleOptions.includes(choosenOption)) {
        switch(choosenOption) {
            case 1:
                mainFunctionality.rentABook(user)
                break;
            case 2:
                mainFunctionality.returnABook(user)
                break;
            case 3:
                mainFunctionality.accountSettings(user)
                break;
            case 4:
                mainFunctionality.exitApp()
                break;
        }
    } else {
        printNewLines(1)
        console.log("Input was not an option")
        printNewLines(3)
        availableOptions()
    }
}

const printNewLines = (amount) => {
    let toPrint = ''
    for(let i = 0; i < amount; ++i) {
        toPrint += '\n'
    }
    console.log(toPrint)
}