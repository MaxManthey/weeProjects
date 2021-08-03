const prompt = require('prompt-sync')();

let existingUser = require('./data/existingUser.json')

let user = undefined

module.exports = function (user) {
    user = user
    printNewLines(3)
    console.log('Welcome ' + user.username)
    console.log('You are logged in as admin')
    mainFunctionality()
}


const mainFunctionality = () => {
    const possibleOptions = [1,2,3,4,5,6]
    
    printNewLines(1)
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
    test = {
        "firstName": "Max",
        "lastName": "Manthey",
        "username": "max",
        "password": "user123",
        "admin": true
    }
    printNewLines(2)
    console.log('Create a new User')
    const firstName = prompt('First name: ')
    const lastName = prompt('Last name: ')
    const username = prompt('Username: ')
    const password = prompt('Password: ')
    const admin = prompt('Make user admin?(y/n): ')

    if(existingUser.filter(u => u.username == username).length != 0) {
        const retry = prompt('Username already exists do you want to try again?(y/n)')
        if(retry == "y") {
            createUser()
        } else {
            mainFunctionality()
        }
    } else {
        existingUser.push({
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "password": password,
            "admin": admin=="y"?true:false
        })
        printNewLines(1)
        console.log("User has been created!")
        mainFunctionality()
    }
}
const deleteUser = () => {
    printNewLines(2)
    console.log("--- Current users ---")
    for(let i = 0; i < existingUser.length; ++i) {
        console.log('(' + (i+1) + ') ' + existingUser[i].username)
    }
    console.log("(" + (existingUser.length+1) + ") Don't delete any users")
    const choosenOption = parseInt(prompt('Which user would you like to delete?: '))
    if(choosenOption > 0 && choosenOption < (existingUser.length+2)) {
        if(choosenOption == (existingUser.length+1)) {
            printNewLines(1)
            console.log("No user has been deleted!")
            mainFunctionality()
        } else {
            console.log("User " + existingUser[choosenOption-1].username + " has been deleted!")
            existingUser = existingUser.filter(u => u != existingUser[choosenOption-1])
            printNewLines(1)
            mainFunctionality()
        }
    } else {
        printNewLines(1)
        console.log("No user has been deleted!")
        mainFunctionality()
    }
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