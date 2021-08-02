const prompt = require('prompt-sync')();
const existingUser = require('./existingUser.json')

module.exports = function () {
    const res = getLoginInput();
    if(Object.keys(res).length == 0) {
        const retry = prompt('Would you like to try again?(y/n): ');
        if(retry == "y") getLoginInput()
        else return res
    } else return res

}


const getLoginInput = () => {
    const username = prompt('Please enter your Username: ');
    const password = prompt('Please enter your Password: ');
    
    const credentialsCheckResult = checkCredentials(username, password)

    return credentialsCheckResult
}


const checkCredentials = (username, password) => {
    const user = existingUser.filter(u => u.username == username)
    if(user.length != 1) {
        console.log("User does not exist")
        return {}
    }
    if(user[0].password != password) {
        console.log(user, user[0].password)
        console.log("Wrong password")
        return {}
    }
    console.log("Login succesful")
    return user[0]
}