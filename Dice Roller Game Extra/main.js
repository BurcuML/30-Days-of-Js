const dice = document.getElementById("dice")
const roll = document.getElementById("roll")
const sec = document.getElementById("sec")


function diceRoller() {
    const images = []
    let random = Math.floor((Math.random() * 6) + 1);
    console.log(random)
    images.push(`<img src="img/dice${random}.png">`)
    sec.innerHTML = images.join("")
}