"use strict";

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
//loop 16 times
// multiplying the outcome against itself
// let numMultiplyBy = 2;
// let counter = 0;
// while(counter < 16){
//     console.log(numMultiplyBy);
//     numMultiplyBy = numMultiplyBy * 2; //*=
//     counter++;
// }
//OR
// for(let = 0, num = 2; i<16; i++){
//     console.log(num);
//     num +=2;
// }


let conesToSell = getRandomNum(50,100);
do{
    let conesToBuy = getRandomNum(1,5);
    if(conesToBuy <= conesToSell){
        console.log(`${conesToBuy} cones sold...`);
        conesToSell -= conesToBuy;
    } else {
        console.log(`Cannot sell you ${conesToBuy} cones. I only have ${conesToSell} ....`);
        console.log(`${conesToSell} cones sold...`);
        conesToSell -= conesToSell;
    }
    if(conesToSell === 0){
        console.log(`Yay! I have sold them all!`);
        break;
    }
} while(conesToSell > 0)