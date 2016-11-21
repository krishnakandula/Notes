console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//console.log(_.isString(true));
//console.log(_.isString('krishna'));
var filteredArray = _.uniq(['Krishna', 'Krishna', 1]);
console.log(filteredArray);

//console.log('Result:', notes.add(1, 2));
//var user = os.userInfo('username');
//fs.appendFile('greetings.txt', `Hello ${user.username}!, you are ${notes.age}`);