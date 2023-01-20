// no xxSync
const { readFile, writeFile } = require('fs');

console.log('start')
//set callback inside of this function 
//without 'utf8' -> show buffer , not text 
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } 
    // console.log(result); //NOT return (result);  it will show noting. 
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the async result: ${first} + ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            // console.log(result)
            console.log('done with this task');
        })
    })
})

//writeFile should within 2nd readFile [nested], otherwise "ReferenceError: second is not defined"

//asynchronous is non-blocking code, sync is blocking code 
console.log('starting next test');