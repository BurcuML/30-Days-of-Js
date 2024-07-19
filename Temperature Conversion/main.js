const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const temp = document.getElementById("temp")
const convert = document.getElementById("convert")
const result = document.getElementById("result")

function convertCels() {
    let f = (temp.value * 9 / 5) + 32
    result.textContent = f + "°F"
}
function convertFah() {
    let c = (temp.value - 32) * 5 / 9
    result.textContent = c + "°C"
}
function convertTemp() {
    if (celsius.selected) {
        convertCels()
    } 
    else if (fahrenheit.selected) {
        convertFah()
    }
    if(temp.value==""){
        result.textContent = "Please enter a value"
    }
}
