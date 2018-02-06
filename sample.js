/*
Sample script to load a sample JSON file for use in
developing stats 

To get started
1. npm install require
2. node sample.js
*/

var fs = require('fs');
var dataRaw = fs.readFileSync('./data-small.json');
var data = JSON.parse(dataRaw);
console.log(data);
