const prompt = require('prompt-sync')();

const login = require('./login')
const main = require('./admin')
const regular = require('./regular');
const admin = require('./admin');


const user = login()

if(Object.keys(user).length != 0) {
    if(user.admin == true) {
        const asAdmin = prompt('Would you like to log in as ADMIN?(y/n): ');
        if(asAdmin == "y") admin()
        else regular()
    } else {
        regular()
    }
}


