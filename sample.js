/*
Sample script to load a sample JSON file for use in
developing stats 

To get started
1. npm install require
3. npm install d3
4. node sample.js
*/

var fs = require('fs');
var dataRaw = fs.readFileSync('./data.json');
var data = JSON.parse(dataRaw);
var d3 = require('d3');

console.log("---------group by institution code and collection code, and sorted by Institution Code Name-----")
console.log(JSON.stringify(valueTotal(data,'institutionCode', 'collectionCode', 'key','ascending')));

console.log("---------group by BasisOfRecord and sorts by value-----")
console.log(JSON.stringify(valueTotal(data,'basisOfRecord',null,'key','ascending')));

// Group on a name and return the number of counts for each name in the dataset
// parameters are:
// 1. JSON object containing data 
// 2. a name containing an attribute in the JSON Object
// 3. sortTopic "key" or "value"
// 4. sortDirection "ascending" or "descending"
// 5. nestedName, another name to nest
function valueTotal(data, name, nestedName, sortTopic, sortDirection ) {
	var groupData;
	if (nestedName != null) {
		groupData = d3.nest()
		.key(function(d) { return eval('d.'+name) + ":" + eval('d.'+nestedName); })
		.rollup(function(v) {return v.length; })
		.entries(data)
	} else {
		groupData = d3.nest()
		.key(function(d) { return eval('d.'+name); })
		.rollup(function(v) {return v.length; })
		.entries(data)
	}
	// sort by key,value and ascending,descending
	return groupData.sort(function(x,y) {
		return eval('d3.'+sortDirection+'(x.'+sortTopic+',y.'+sortTopic+')');
	});
}

