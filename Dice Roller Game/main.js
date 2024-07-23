const dice = document.getElementById("dice")
const roll= document.getElementById("roll")
const sec= document.getElementById("sec")


let numbers = [1, 2, 3, 4, 5, 6];


function diceRoller(){
let random = Math.floor(Math.random() * numbers.length);
    dice.textContent = numbers[random];
    if (numbers[random]===6) {
        sec.classList.toggle("color")  
    }
    else {
    sec.classList.remove("color")
    }
}