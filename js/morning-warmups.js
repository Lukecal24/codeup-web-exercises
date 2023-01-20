// ================================= WARM UP
// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’

// function returnLastTwoChars(input){
//     return input.slice(-2);
// }
//
//
// console.log(returnLastTwoChars("Luke"));




// EXTRA CHALLENGE
// Create a function, returnLastCharsReversed that takes in two arguments:
//     1. a string of characters
// 2. an integer that represents how many characters should be returned
// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.
//     Examples:
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’

// function returnLastCharsReversed(input,integer){
//     return input.slice(-integer).split("").reverse().join("");
// }
//
//
// console.log(returnLastCharsReversed("Aphex", 3));



// ================================= WARM UP
// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’


// function iBeforeE(input){
//     return input.replaceAll("ei","ie")
// }
// function iBeforeE(string) {
//     return string.split("ei").join("ie");
// }
// console.log(iBeforeE("height"));


// ================================= WARM UP
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]


// function filterList(input){
//     return input.filter(function(x){
//         if (typeof(x) === "number")
//             return true;
//
//     });
// }
//
//
// console.log(filterList([1, 'a', 'b', 0, 15]));

// ================================= WARM UP
//
// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
//
//
// zipArrays([], []) // returns []
// zipArrays([1], [2]) // returns [1, 2]
// zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
// zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns...

    // [
    // 1,
    //     'bob',
    //     2,
    //     null,
    //     'a',
    //     'sally',
    //     'b',
    //     25
    // ]

// function zipArrays(input1, input2){
//     let newArr = [];
//     for (let i=0; i < input1.length || i < input2.length; i++){
//         if (i < input1.length) {
//             newArr.push(input1[i]);
//         }
//         if (i < input2.length) {
//             newArr.push(input2[i]);
//         }
//     }
//     return newArr;
// }
//
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]));


// ================================= WARM UP
//
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.


//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// function getUserCredentials(users){
//     const credentials = [];
//     for(let i = 0 ; i < users.length; i++){
//         const user = users[i];
//         credentials.push({username: user.username, password: user.password})
//
//         }
//     return credentials;
//     }
//
//
//
// console.log(getUserCredentials(users)) // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/


// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
//     // i++;
// }

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9



// Create a function, shiftElementsOver, that takes in an array and returns the array with all elements moved one index further into the array. The final element should be moved to the front. Assume the input array will have three or more elements.


// console.log(shiftElementsOver([1, 2, 3, 4, 5])) // returns [5, 1, 2, 3, 4]
// shiftElementsOver(['bob', 'sally', 'mary']) // returns ['mary', 'bob', 'sally']
// shiftElementsOver([null, 123, 'hello world', true]) // returns [true, null, 123, 'hello world']
//
// function shiftElementsOver(arr) {
//     let last = arr.pop();
//     arr.unshift(last);
//     return arr;
// }


// quizz tests
// var isColdOutside = true;
//
// var clothingToWear;
//
// if (isColdOutside) {
//     clothingToWear = 'sweater and a jacket';
// } else {
//     clothingToWear = 'shorts and a t-shirt';
// }
//
// var clothingToWear = isColdOutside ? 'sweater and a jacket' : 'shorts and a t-shirt';
//
// var clothingToWear = isColdOutside ? 'shorts and a t-shirt' : 'sweater and a jacket';


// console.log(10 % 3);
//
//
// var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];


// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }
//
// function goodArea (neighborhood) {
//    let schoolGrade = 0;
//    for(let i = 0; i < neighborhood.schools.length; i++){
//        schoolGrade = neighborhood.schools[i].rating;
//    }
//
//    return neighborhood.medianHomePrice <= 300000 && neighborhood.crimeRate === 'low' && schoolGrade >= 24;
//
// };
//
// // console.log(goodArea(neighborhood3));
//
// console.log(goodArea(neighborhood1)) // returns false due to school rating
// console.log(goodArea(neighborhood2)) // returns false due to crime rate
// console.log(goodArea(neighborhood3)) // returns true
// console.log(goodArea(neighborhood4)) // returns false due to median home price
//

//jan 19


// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:

// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// console.log(encodeStr('apple')) // returns ‘@pple’
// console.log(encodeStr('codeup')) // returns ‘codeup’
// console.log(encodeStr('SASS')) // returns ‘$@$$’
// console.log(encodeStr('bike')) // returns ‘b1ke’
//
// function encodeStr(input){
//     return input
//         .toLowerCase()
//         .replaceAll('a','@')
//         .replaceAll('i','1')
//         .replaceAll('s','$');
// }

