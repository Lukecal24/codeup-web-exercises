//let userName = myFunction(name:"Jason");
//console.log(message);
let person1 = "Billy",
    person2 = "Bob"
fight(person1, person2)
let x = isEven(583839329342832);
console.log(x)
let y = isEven(78474748784782872);
console.log(y)
let z = isEven("hdshsdjsdhfjknj");
console.log(z)
let a = isEven(true);
console.log(a)

function myFunction(name){
    return "Thank you, " + name + " you have ran my function";
}

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " right in the kisser ");
}

function isEven(num){
    // GET THE PIECES OF THE PUZZLE!!!!!
    // PUT THE PIECES OF THE PUZZLE INTO VARIABLES
    let number = num;
    let answer = (number % 2 == 0)

    // FINALLY RETURN THE ANSWER
    return answer
}