/*
Sample script to load a sample JSON file for use in
developing stats 

To get started
1. npm install require
2. npm install underscore
3. node sample.js
*/

var fs = require('fs');
var _ = require('underscore')._;
var dataRaw = fs.readFileSync('./data-small.json');
var data = JSON.parse(dataRaw);

console.log("---------this is our incoming data source ------------")
console.log(data);


var grouper = function(row) { return row.type; };
var summer = function(rows) { return rows.reduce(function(sum, row) { return sum + row.weight; }, 0); };

var o  = _.chain(data)
          .groupBy(grouper)
          .map(function(rows) { return { type: rows[0].type,  sum: summer(rows) }; })
          .value();

console.log("---------output stats------------")
console.log(o); // same result
