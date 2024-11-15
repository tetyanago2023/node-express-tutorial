// modules.js

const names = require('./04-names');
console.log(names);
const sayHi = require('./05-utils');
console.log(sayHi);
const data = require('./06-alternative-flavor');
console.log(data);
require('./07-mind-grenade');

sayHi('susan');
sayHi(names.ivan);
sayHi(names.olga);