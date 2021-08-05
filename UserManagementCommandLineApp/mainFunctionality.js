const prompt = require('prompt-sync')();

let existingUser = require('./data/existingUser.json')
let allBooks = require('./data/books.json')

const rentABook = (user) => {
    printNewLines(2)
    console.log('--- Rent book ---')
    const rentedBooks = existingUser.reduce((books,usr) => books.concat(usr.booksRent),[])
    let availableBookCount = 0
    let availableBooks = []
    for(let i = 0; i < allBooks.length; ++i) {
        if(!rentedBooks.includes(i)) {
            ++availableBookCount
            availableBooks.push([availableBookCount, i])
            console.log("(" + availableBookCount + ")\ttitle: " + allBooks[i].title)
            console.log("\tauthor: " + allBooks[i].author)
        }
    }
    if(availableBookCount == 0) {
        console.log("Sorry but there are no books available right now.")
        return
    }
    console.log("(" + (availableBookCount+1) + ")\tReturn")
    const choosenBook = parseInt(prompt("Which book would you like to rent? "))
    if(choosenBook < 1 || choosenBook > availableBookCount) {
        if(choosenBook != availableBookCount+1) {
            console.log("Selected option was not viable.")
        }
        return
    }
    for(usr of existingUser) {
        if(usr == user) {
            usr.booksRent.push(availableBooks[choosenBook-1][1])
        }
    }
    console.log("Book has been rented succesfully!")
}


const returnABook = (user) => {
    printNewLines(2)
    console.log('--- Return a book ---')
    availableBookCount = 0
    let availableBooks = []
    for(let i = 0; i < allBooks.length; ++i) {
        if(user.booksRent.includes(i)) {
            ++availableBookCount
            availableBooks.push(i)
            console.log("(" + availableBookCount + ")\ttitle: " + allBooks[i].title)
            console.log("\tauthor: " + allBooks[i].author)
        }
    }
    if(availableBookCount == 0) {
        console.log("You don't have any books to return.")
        return
    }
    console.log("(" + (availableBookCount+1) + ")\tReturn")
    const choosenBook = prompt("Which book would you like to return? ")
    if(choosenBook < 1 || choosenBook > availableBookCount) {
        if(choosenBook != availableBookCount+1) {
            console.log("Selected option was not viable.")
        }
        return
    }
    for(usr of existingUser) {
        if(usr == user) {
            usr.booksRent = usr.booksRent.filter(book => book != availableBooks[choosenBook-1])
        }
    }
    console.log("Book has been returned succesfully!")
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
    for(usr of existingUser) {
        if(usr == user) {
            usr.firstName = firstName
            usr.lastName = lastName
        }
    }
    console.log("User data changed succesfully")
}
const changePassword = (user) => {
    printNewLines(2)
    console.log("--- Change Password ---")
    const oldPassword = prompt("Please enter your current password: ")
    if(user.password != oldPassword) {
        const retry = prompt("Password was incorrect, try again?(y/n)")
        if(retry == "y") {
            changePassword(user)
        } else {
            return
        }
    } else {
        const newPassword = prompt("Please enter your new password: ")
        const repeatPassword = prompt("Please repeat your new password: ")
        if(newPassword != repeatPassword) {
            const retry = prompt("Passwords didn't match, try again?(y/n)")
            if(retry == "y") {
                changePassword(user)
            } else {
                return
            }
        } else {
            for(usr of existingUser) {
                if(usr == user) {
                    usr.password = newPassword
                }
            }
            console.log("Password has been changed succesfully")
        }
    }
}
const deleteAccount = (user) => {
    //TODO Log out
    printNewLines(2)
    console.log("--- Delete your Account ---")
    const confirmDeletion = prompt("Do you really want to delete your account?(y/n) ")
    if(confirmDeletion == "y") {
        existingUser = existingUser.filter(usr => usr != user)
    }
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
exports.accountSettings = accountSettings
exports.exitApp = exitApp
exports.printNewLines = printNewLines