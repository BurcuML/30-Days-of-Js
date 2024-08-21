const createGrid = document.getElementById("createGrid");
const clearGrid = document.getElementById("clearGrid")
const width = document.getElementById("width")
const height = document.getElementById("height")
const pwidth = document.getElementById("pwidth")
const pheight = document.getElementById("pheight")
const color = document.getElementById("color")
const eraseBtn = document.getElementById("erase")
const paintBtn = document.getElementById("paint")
const container = document.querySelector(".cont")

const updateHeight = () => {
  pheight.innerText = height.value
}

const updateWidth = () => {
  pwidth.innerText = width.value
}

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend"
  },
}

let deviceType= "";

let erase = false;
let drawing = false;
let lastX, lastY;


const createGrids = ()=>{
  container.innerHTML="";
  let count= 0;
  for (let i = 0; i < height.value; i++) {
    count+=2;
    const row = document.createElement("div");
    row.classList.add("row")
  }
    for (let j = 0; j < width.value; j++) {
      count+=2;
      const col = document.createElement("div");
      col.classList.add("col")
      col.setAttribute("id", `col${count}`)
    }

}