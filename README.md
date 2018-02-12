# node-grouper-sorter
The goal of this exercise is to read in a JSON file and enable
grouping and counting values and sorting by either the key (name) or
value (count). 

at prompt type
```
node sample.js
```

If you don't have required libs you may need to install... node will prompt you\

If you are succesfull, you will see something like the following output:

```
---------the following sorts by institution code and collection code, sorted by Institution Code Name-----
[{"key":"CHSC","values":[{"key":"VascularPlants","value":5}]},{"key":"UCD","values":[{"key":"VascularPlants","value":3}]},{"key":"iNaturalist","values":[{"key":"Observations","value":1}]}]
```

