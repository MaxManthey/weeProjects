const prompt = require('prompt-sync')();

let user = undefined

module.exports = function (user) {
    user = user
    printNewLines(3)
    console.log('Welcome ' + user.username)
    console.log('You are logged in as admin')
    printNewLines(2)
    mainFunctionality()
}


const mainFunctionality = () => {
    const possibleOptions = [1,2,3,4,5,6]
    
    console.log('What do you want to do?')
    console.log('(1) Rent a Book')
    console.log('(2) Return a Book')
    console.log('(3) Account Settings')
    console.log('(4) Create New User')
    console.log('(5) Delete a User')
    console.log('(6) Exit')
    
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
                createUser()
                break;
            case 5:
                deleteUser()
                break;
            case 6:
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

const createUser = () => {
    console.log('Create a user')
    mainFunctionality()
}
const deleteUser = () => {
    console.log('Delete a user')
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