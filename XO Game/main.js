const player1Score = document.getElementById("player1")
const player2Score = document.getElementById("player2")
const player = document.getElementById("player")
const resetBtn = document.getElementById("reset")
const cell = document.querySelectorAll(".cell")


const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";
let play = false;

player1Score.innerText = 0
player2Score.innerText = 0


function playGame() {
    cell.forEach(cell =>
        cell.addEventListener("click", cellClicked));
    resetBtn.addEventListener("click", resetButton);
    player.innerText = `${currentPlayer}'s turn`;
    play = true;
}

playGame()

function cellClicked() {

    const idx = this.getAttribute("idx");

    if (options[idx] != "" || !play) {
        return;
    }
    updateCell(this, idx);
    checkWinner();
}

function updateCell(cell, Opindex) {
    options[Opindex] = currentPlayer;
    cell.innerText = currentPlayer;

}

function checkPlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    player.innerText = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let winner = false

    for (let i = 0; i < conditions.length; i++) {
        const condition = conditions[i];
        const a = options[condition[0]];
        const b = options[condition[1]];
        const c = options[condition[2]];
        if (a == "" || b == "" || c == "") {
            continue;
        }
        if (a == b && b == c) {
            winner = true;
            break;
        }
    }
    if (winner) {
        player.innerText = `${currentPlayer} wins!`
        play = false;
    }
    else if (!options.includes("")) {
        player.innerText = "It's a tie!"
        play = false;
    }
    else {
        checkPlayer();
        play = false
    }
}

function resetButton() {
    currentPlayer = "X"
    player.innerText = `${currentPlayer}'s turn`;
    options = ["", "", "", "", "", "", "", "", ""]
    cell.forEach(cell => cell.innerText = "");
    play = true;
}