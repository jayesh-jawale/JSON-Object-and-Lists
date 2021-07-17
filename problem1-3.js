// Problem 1 (5 mins):
// Parsing an JSON object’s Values:

// Write a function called "printAllValues" which returns an newArray of all the input object’s values.

var object = {name: "RajiniKanth", age: 33, hasPets : false};

function printAllValues(obj) {
    var obj = [object.name+ ","+object.age+ ","+object.hasPets]
    console.log(obj)
}

printAllValues();

//--------------------------------------------------------------------------------------------------------------

// Problem 2(5 mins) :
// Parsing an JSON object’s Keys:

// Write a function called "printAllKeys" which returns an newArray of all the input object's keys.

var input = {name : 'RajiniKanth', age : 25, hasPets : true}

function printAllKeys(input) {
   var keys = Object.keys(input)
   return keys;
}

  var func_output = printAllKeys(input);
  console.log(func_output);

//--------------------------------------------------------------------------------------------------------------

// Problem 3( 7–9 mins):
// Parsing an JSON object and convert it to a list:

// Write a function called "convertObjectToList" which converts an object literal into an array of arrays.

// Input (Object):
// var object = {name: "ISRO", age: 35, role: "Scientist"};

// Output:
// [[ 'name', 'ISRO' ], [ 'age', 35 ], [ 'role', 'Scientist' ]]

var obj = {name: "ISRO", age: 35, role: "Scientist"};

function convertListToObject(obj) {
 var output = Object.entries(obj)
 return output;

}

console.log(convertListToObject(obj));

