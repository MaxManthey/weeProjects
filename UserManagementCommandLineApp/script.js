const prompt = require('prompt-sync')();

const login = require('./login')
const regular = require('./regular');
const admin = require('./admin');

const asciiBook = `
      __...--~~~~~-._   _.-~~~~~--...__
    //               'V'               \\\\ 
   //                 |                 \\\\ 
  //__...--~~~~~~-._  |  _.-~~~~~~--...__\\\\ 
 //__.....----~~~~._\\ | /_.~~~~----.....__\\\\
====================\\\\|//====================
                    '---'
`
console.log(asciiBook)
console.log("\t    WELCOME TO xyz LIBRARY\n\n")

const user = login()

if(Object.keys(user).length != 0) {
    if(user.admin == true) {
        const asAdmin = prompt('Would you like to log in as ADMIN?(y/n): ');
        if(asAdmin == "y") admin(user)
        else regular(user)
    } else {
        regular(user)
    }
} else {
    console.log("\n\nGoodbye!\n\n")
}


