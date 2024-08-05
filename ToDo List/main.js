const textarea = document.querySelector("textarea");
const ul = document.querySelector("ul");
const check = document.querySelector("check");

function addTodo(){
    if (textarea.value==="") {
        alert("It's empty text!")
    }

    else{
    const text = textarea.value;
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent= text;
    document.querySelector("textarea").value = "";
    }

}

/*let items = JSON.parse(localStorage.getItem('items')) || [];
items.push(input);
localStorage.setItem('items', JSON.stringify(items));*/


function clearAll(){
    localStorage.clear();
    document.getElementById("list").textContent = "";
}