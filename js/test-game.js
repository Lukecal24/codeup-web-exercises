let character =
    document.getElementById("character");

let block =
    document.getElementById("block");


document.addEventListener("click",jump);

function jump(){
    if(character.classlist != "animate") {

        character.classList.add("animate");
    }
    setTimeout(removeJump,300);
};
function removeJump(){
    character.classList.remove("animate");
}


let checkDead = setInterval(function(){
    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 &&
    characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert('You Lose!!!!')
    }


    // if (this.distanceRan > this.highestScore) {
    //     this.highestScore = Math.ceil(this.distanceRan);
    //     this.distanceMeter.setHighScore(this.highestScore);
    // }
},10);




