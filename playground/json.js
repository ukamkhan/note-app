// var obj = {
//   name: 'Uzma'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
//
// var personString = '{"name": "Uzma", "age": 37}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs= require('fs');

var originalNote = {
  title: 'some title',
  body: 'some body'
};
var originalNodeString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNodeString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
