"use strict";


function showMultiplicationTable(input){
    for (let i = 1; i< 11; i++){
        console.log(input + " x " + i + " = " + i * input)
    }
}
showMultiplicationTable(7)


// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...


function getRandomNum(min, max){
return Math.floor(Math.random() * (max - min + 1) + min)
}

// the above is function to generate random number

// let randomNumber =  Math.floor(Math.random() * 200) + 20
// console.log(randomNumber)
//
// function isOddEven(){
//     for (let i = 1; i< 11; i++) {
//         randomNumber =  Math.floor(Math.random() * 200) + 20
//         if (randomNumber % 2 === 0) {
//             console.log(randomNumber + " is even");
//         } else {
//             console.log(randomNumber + " is odd");
//         }
//     }
// }
// console.log(isOddEven(randomNumber));
// % 2 === 0

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// let n = 9; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//     // Internal loop
//     for (let j = 1; j <= i; j++) {
//         string += i;
//     }
//     string += "\n";
// }
// console.log(string);

for (let i = 1; i < 10; i++){
    console.log(String(i).repeat(i));
};


// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for (let i = 100; i < 5; i++){
//     console.log(i - 5);
// }

for(let i = 100; i >= 5; i = i - 5){
    console.log(i);
}

