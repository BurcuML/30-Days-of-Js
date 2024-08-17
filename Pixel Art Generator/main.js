const createGrid = document.getElementById("createGrid");
const clearGrid = document.getElementById("clearGrid")
const width = document.getElementById("width")
const height = document.getElementById("height")
const pwidth = document.getElementById("pwidth")
const pheight = document.getElementById("pheight")


const updateHeight = () => {
  pheight.innerText = height.value
}

const updateWidth = () => {
  pwidth.innerText = width.value
}