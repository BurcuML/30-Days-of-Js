const guess = document.getElementById("guess")
const submit = document.getElementById("submit")
const message = document.getElementById("message")
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
const minNum = 0;
const maxNum = 100;
const win = "You win!"

function guessNum() {
    if (guess.value > maxNum || guess.value <= minNum) {
        message.textContent = `Guess a number between ${minNum} and ${maxNum}`
    }
    else if (guess.value == randomNum) {
        message.textContent = win
        randomNum = Math.floor(Math.random() * 100) + 1;
        playAgain()
    } else if (guess.value > randomNum) {
        message.textContent = "Too high!";
    } else if (guess.value < randomNum) {
        message.textContent = "Too low!";
    } else if (guess.value != randomNum) {
        message.textContent = "Try again!";
    }
    guess.value = ""
    guess.focus()
}

function playAgain() {
    submit.textContent = "Play Again?";
    submit.addEventListener("click", function () {
        location.reload()
    });
}
