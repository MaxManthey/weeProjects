const prompt = require('prompt-sync')();

const rentABook = (user) => {
    printNewLines(2)
    console.log('--- Rent book ---')
    //print available books
    const choosenBook = prompt("Which book would you like to rent? ")
}


const returnABook = (user) => {
    printNewLines(2)
    console.log('--- Return a book ---')
    //print borrowed books
    const choosenBook = prompt("Which book would you like to return? ")
}


const accountSettings = (user) => {
    printNewLines(2)
    console.log("--- Account settings ---")
    console.log("(1) Change user data")
    console.log("(2) Change password")
    console.log("(3) Delete account")
    console.log("(4) Return")
    const choosenOption = parseInt(prompt("Please choose a number: "))
    switch(choosenOption) {
        case 1:
            changeUserData(user)
            break;
        case 2:
            changePassword(user)
            break;
        case 3:
            deleteAccount(user)
            break;
    }
}
const changeUserData = (user) => {
    printNewLines(2)
    console.log("--- Change User Data ---")
    const firstName = prompt("Please enter your first name: ")
    const lastName = prompt("Please enter your last name: ")
}
const changePassword = (user) => {
    printNewLines(2)
    console.log("--- Change Password ---")
    const oldPassword = prompt("Please enter your current password: ")
    const newPassword = prompt("Please enter your new password: ")
    const repeatPassword = prompt("Please repeat your new password: ")

}
const deleteAccount = (user) => {
    //TODO Log out
    printNewLines(2)
    console.log("--- Delete your Account ---")
    const confirmDeletion = prompt("Do you really want to delete your account?(y/n) ")

}


const exitApp = () => {
    printNewLines(1)
    const closedBookAsci = `
     _______
    /      /,
   /      //
  /______//
 (______(/
    `
    console.log(closedBookAsci)
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

exports.rentABook = rentABook
exports.returnABook = returnABook
exports.exitApp = exitApp
exports.printNewLines = printNewLines