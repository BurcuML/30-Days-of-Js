const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const temp = document.getElementById("temp")
const convert = document.getElementById("convert")
const result = document.getElementById("result")

function convertFah() {
    let f = (temp.value * 9 / 5) + 32
    result.textContent = temp.value + "°C = " +  f + "°F"
}
function convertCels() {
    let c = (temp.value - 32) * 5 / 9
    result.textContent = temp.value + "°F = " + c + "°C"
}
function convertTemp() {
    if (celsius.selected) {
        convertFah()
    } 
    else if (fahrenheit.selected) {
        convertCels()
    }
    if(temp.value==""){
        result.textContent = "Please enter a value"
    }
}
