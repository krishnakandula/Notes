console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo('username');
fs.appendFile('greetings.txt', `Hello ${user.username}!, you are ${notes.age}`);