// use built in modules, npm or 3rd party etc
console.log('Starting app.js');

//  require built in modules. always takes in one argument which is the name of the module
const fs = require('fs');
const os = require('os');
// var user = os.userInfo();
/*
fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err) {
	if (err) {
		console.log('Unable to write to the file');
	}
});
*/

// option 2, template strings, available V6 and higher, remember the ticks instead of quotes
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to the file');
// 	}
// });

// this executes your own notes file. We require files slightly differently than modules
const notes = require('./notes.js');
var res = notes.addNote();
console.log(res);
var sum = notes.add(3, 5);
console.log(sum);

// requiring a npm module
// its going to look in core, then in the node_modules
const _ = require('lodash');
// console.log(_.isString(true));
// console.log(_.isString('Uzma'));
var filteredArray = _.uniq(['Urooj']);
console.log(filteredArray);
