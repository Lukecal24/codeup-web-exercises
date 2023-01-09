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

function zipArrays(input1, input2){
    let newArr = [];
    for (let i=0; i < input1.length || i < input2.length; i++){
        if (i < input1.length) {
            newArr.push(input1[i]);
        }
        if (i < input2.length) {
            newArr.push(input2[i]);
        }
    }
    return newArr;
}

console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]));