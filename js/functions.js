"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

let helloMessage;

function sayHello(name){
    helloMessage = "Hello " + name + "!"
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

sayHello("Luke");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Luke";
sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


function isTwo(num){
    return num == 2;
}
console.log(isTwo(random));
console.log(random);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
let tipAnswer = calculateTip(1412, 14);
console.log(tipAnswer);
function calculateTip(total, tip){
    let tipConversion = tip / 100; // 0.20, 0.30
    let answer = tipConversion * total;
    // console.log(total, tip);
    // let tipFormatted = "0." + tip;
    // tipFormatted = parseFloat(tipFormatted);
    // console.log(tipFormatted)
    // let answer = total * tipFormatted;
    alert(answer);
}


// function calculateTip(bill, tip){
//     let totalTip = (bill * tip)
//     console.log(totalTip)
// }
// calculateTip(50, 0.18);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

const userBill = prompt("What is the total of the bill?");
const userTip = prompt("What is your tip?");

const conversionOfBillToNumber = parseInt(userBill); // this will convert the string from the prompt to a number
const conversionOfUserTipToNumber = parseInt(userTip);

const callToFunction = calculateTip(conversionOfBillToNumber, conversionOfUserTipToNumber); // these are the arguments for the function
console.log(callToFunction);


// let bill = prompt('Total bill amount?');
//
// let tip = prompt("Tip percentage?");

// //calculateTip(bill, tip);
//
// alert("Thanks for the " + calculateTip(bill, tip) + " tip!")

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
var originalPrice = 100;
var discountPercent = 20; // 20%
let appliedDiscount = applyDiscount(originalPrice, discountPercent) // 80
console.log("about to apply a " + discountPercent + "% discount to an original price of " + originalPrice)
console.log(appliedDiscount);

function applyDiscount(price, discount){
    let discountFormatted = discount / 100;
    let result = (1 - discountFormatted) * price;
    return result.toFixed(2);
}


//arrow Function below

// const sayHello = (name) => {
//
// }

//let message = `Hello ${name}!`    backitck concatenation method