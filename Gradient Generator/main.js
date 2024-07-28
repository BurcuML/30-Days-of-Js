const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")



function generateLinear() {
    const gradientString = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    document.body.style.background = gradientString;
    console.log(gradientString)
}
function generateRadial() {
    const gradientString = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    document.body.style.background = gradientString;
    console.log(gradientString)
}
function generateConic() {
    const gradientString = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    document.body.style.background = gradientString;
    console.log(gradientString)
}