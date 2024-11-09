// 1-read-file.js

const { readFile} = require('fs');

console.log('starting the first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('end of the first task');
})
console.log(`starting the next task`);
