const readline = require('readline');

const readlineInp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var books = ['Alice in Wonderland', 'The Wizard of Oz']

function fun() {

    readlineInp.question('Press 1, 2 or 3 - ', (num) => {
        if (num == 1) {
            console.log(books);
            return fun()
        } else if (num == 2) {
            readlineInp.question('Add book - ', (book_name) => {
                books.push(book_name)
                console.log(`${book_name} added successfully`)
                return fun()
            })
        
        } else if (num == 3) {
            readlineInp.question('Are you sure you want to quit - press Y to quit - ', (option) => {
                if (option == 'y' || option == 'Y') {
                    console.log('Bye Bye')
                    readlineInp.close()
                } else {
                    return fun()
                }
            })
        } else {
            console.log('You have selected an invalid entry so please press 1, 2 or 3')
            return fun()
        }
        
        
    })
}


// readlineInp.on('close', function (num) {
    
// })

const eventEmitter = require('events');
const eventemitter = new eventEmitter()

eventemitter.on('user', fun)
eventemitter.emit('user')