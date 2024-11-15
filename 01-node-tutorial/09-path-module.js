// 09-path-module.js

// Load the built-in 'path' module
const path = require('path');

console.log(path.sep); // Prints the separator used in the current OS

// Join a sequence of strings into a file path starting from the root
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Print the base name of the file path
const base = path.basename(filePath);
console.log(base);

// Print the absolute path of the file path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
