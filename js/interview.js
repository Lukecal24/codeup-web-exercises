let myFoods = ["pizza", "spaghetti", "papusas"];

for(let i = 0; i < myFoods.length; i+=1){
    console.log(myFoods[i]);
}

let logFoods = (input) =>{
    for(let i = 0; i < input.length; i+=1){
        console.log(`Here is a food i like: ${input[i]}!`);
    }
}

logFoods(myFoods);