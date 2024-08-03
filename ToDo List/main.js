let newTodo = document.getElementById("new-todo").value;
let listLi = document.getElementById("list-li");
let list = document.getElementById("list");
let todos = JSON.parse(localStorage.getItem("todo")) || [];
localStorage.setItem("todo", JSON.stringify(todos));
const data = JSON.parse(localStorage.getItem('todo'));


function addTodo(text){
    let li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li)
}

function clearAll(){
    localStorage.clear();
    document.getElementById("listnum").textContent = "";
}