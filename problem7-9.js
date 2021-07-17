// Problem 7 (10 — 20 mins):
// Parsing two JSON objects and Compare:

// Write an "assertObjectsEqual" function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify().
// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
// Success Case:
// Input:
// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
// Output:
// Passed
// Failure Case:
// Input:var expected = {foo: 6, bar: 5};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// Output:
// FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}

function assertObjectsEqual(actual, expected, testName) {
    if(JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("passed");
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  assertObjectsEqual(actual, expected, 'detects that two objects are equal')

//--------------------------------------------------------------------------------------------------------------

// Problem 8(10 mins):
// Parsing JSON objects and Compare:

// I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer

  var securityQuestions = [
    {
    question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]

   var arr0 = 
    {
        question: "What was your first pet's name?",
        expectedAnswer: "FlufferNutter"
    }

    function chksecurityQuestions() {

    let test = Object.entries(securityQuestions[0]).every(([key, value]) => arr0[key] === value ) 
    console.log(test)
}

chksecurityQuestions();

//--------------------------------------------------------------------------------------------------------------

// Problem 9(20 mins):
// Parsing JSON objects and Compare:

// Write a function to return the list of characters below 20 age

var students = [
    {name: "Siddharth Abhimanyu", age: 21},{ name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];

    function returnMinors(students) {
        for(let i=0;i<students.length;i++) {
            if(students[i].age<20) {
                console.log(students[i]);
            }
        }
    }

    returnMinors(students);
