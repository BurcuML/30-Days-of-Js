const createGrid = document.getElementById("createGrid");
const clearGrid = document.getElementById("clearGrid")
const width = document.getElementById("width")
const height = document.getElementById("height")
const pwidth = document.getElementById("pwidth")
const pheight = document.getElementById("pheight")

function updateWidth(val) {
    width.value=val; 
    pwidth.innerText= val
  }

function updateHeight(val2) {
    height.value=val2; 
    pheight.innerText= val2
  }
  