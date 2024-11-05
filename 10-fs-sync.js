// 10-fs-sync.js

// Import the required functions from the fs and path modules
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

console.log('start')

// Read the contents of the first and second files
const first = readFileSync(path.join(__dirname, 'content', 'first.txt'), 'utf8');
const second = readFileSync(path.join(__dirname, 'content', 'second.txt'), 'utf8');

// Log the contents of the first file to the second file
console.log('First file contents:', first);
console.log('Second file contents:', second);
console.log(first, second);

writeFileSync(path.join(__dirname, 'content', 'result-sync.txt'),
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' });

