const input = document.querySelector("input").value;
const ul = document.querySelector("ul");


function addTodo(){
    if (newTodo==="") {
        alert("It's empty text!")
    }

    else{

    let li = document.createElement("li");
    let text = document.createTextNode(input);
    li.appendChild(text)
    ul.appendChild(li);
    document.getElementById("newTodo").value = "";
    console.log(text)

    }

}

function clearAll(){
    localStorage.clear();
    document.getElementById("list").textContent = "";
}