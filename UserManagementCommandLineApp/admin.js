const prompt = require('prompt-sync')();

let existingUser = require('./data/existingUser.json')
const mainFunctionality = require('./mainFunctionality')

let user = undefined

module.exports = function (userObj) {
    user = userObj
    printNewLines(3)
    console.log('Welcome ' + user.firstName)
    console.log('You are logged in as admin')
    availableOptions()
}


const availableOptions = () => {
    const possibleOptions = [1,2,3,4,5,6]
    
    printNewLines(1)
    console.log('What do you want to do?')
    console.log('(1) Rent a Book')
    console.log('(2) Return a Book')
    console.log('(3) Account Settings')
    console.log('(4) Create New User')
    console.log('(5) Delete a User')
    console.log('(6) Exit App')
    
    const choosenOption = parseInt(prompt('Please enter a number: '));
    if(possibleOptions.includes(choosenOption)) {
        switch(choosenOption) {
            case 1:
                mainFunctionality.rentABook(user)
                availableOptions()
                break;
            case 2:
                mainFunctionality.returnABook(user)
                availableOptions()
                break;
            case 3:
                mainFunctionality.accountSettings(user)
                availableOptions()
                break;
            case 4:
                createUser()
                availableOptions()
                break;
            case 5:
                const endApp = deleteUser(user)
                if(endApp) {
                    mainFunctionality.exitApp()
                }
                availableOptions()
                break;
            case 6:
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


const createUser = () => {
    printNewLines(2)
    console.log('--- Create a new User ---')
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
            return
        }
    } else {
        existingUser.push({
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "password": password,
            "admin": admin=="y"?true:false,
            "booksRent": []
        })
        printNewLines(1)
        console.log("User has been created!")
    }
}


const deleteUser = (user) => {
    //TODO if user == own account => double check => log out
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
            return false
        } else {
            let deleteOwnAccount = false
            if(user == existingUser[choosenOption-1]) {
                const deleteAccountChoice = prompt("You are about to delete your own account, continue?(y/n) ")
                if(deleteAccountChoice != "y") {
                    return false
                }
                deleteOwnAccount = true
            }
            console.log("User " + existingUser[choosenOption-1].username + " has been deleted!")
            existingUser = existingUser.filter(u => u != existingUser[choosenOption-1])
            printNewLines(1)
            return deleteOwnAccount
        }
    } else {
        printNewLines(1)
        console.log("No user has been deleted!")
        return false
    }
}


const printNewLines = (amount) => {
    let toPrint = ''
    for(let i = 0; i < amount; ++i) {
        toPrint += '\n'
    }
    console.log(toPrint)
}