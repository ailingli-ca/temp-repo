// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils'); //don't need .js
const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); 
// console.log(names); //show Object { john: 'John', peter: 'Peter' }
// console.log(data); // Object { items: [ 'item1', 'item2' ], singlePerson: { name: 'Bob' } }

sayHi('Susan');
// sayHi(john);
sayHi(names.john);
// sayHi(peter);
sayHi(names.peter);