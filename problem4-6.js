// Problem 4( 5 mins):
// Parsing a list and transform the first and last elements of it:

// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.

// Input (Array):
// var array = ["GUVI", "I", "am", "Geek"];

// Output:
// var object = {
// GUVI : "Geek"
// }

var arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {
 let first = arr[0];
 let last = arr[arr.length-1]

 let newObject = {};
 newObject[first] = last
 return newObject;
}

var func_output = transformFirstAndLast(arr)
console.log(func_output);

//--------------------------------------------------------------------------------------------------------------

// Problem 5 ( 7 -9 mins):
// Parsing a list of lists and convert into a JSON object:

// Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Input (Array):
// var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

// Output:
// var object = {
// make : "Ford"
// model : "Mustang",
// year : 1964
// }

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
    var newObject = {};
    for(pair of arr) {
        const[key, value] = pair
        newObject[key] = value
    };

    return newObject;
}

console.log(fromListToObject(arr));

//--------------------------------------------------------------------------------------------------------------

// Problem 6 (10 mins):
// Parsing a list of lists and convert into a JSON object:

// Write a function called "transformGeekData" that transforms some set of data from one format to another.

// Input (Array):
// let arr = [[["firstName", "Vasanth"],["lastName", "Raja"],["age", 24],["role", "JSWizard"]],[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

// Output:
// [
// {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
// ]

let arr = [[["firstName", "Vasanth"],["lastName", "Raja"],["age", 24],["role", "JSWizard"]],[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    
    for(let i=0; i<arr.length;i++){
        tranformEmployeeList[i] = {} ;
            for(let j=0;j<arr[i].length;j++) {
                tranformEmployeeList[i] [arr[i][j][0]] = [arr[i][j][1]] 
            }
    }
    
    return tranformEmployeeList;
   }

   var func_output = transformEmployeeData(arr)
   console.log(func_output)
