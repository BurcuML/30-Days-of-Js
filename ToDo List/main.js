const textarea = document.querySelector("textarea");
const ul = document.querySelector("ul");

function addTodo(){
    if (textarea.value==="") {
        alert("It's empty text!")
    }

    else{
    const text = textarea.value;
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent= text;
    li.style.marginBottom= "15px"
    li.style.width="250px"
    li.style.wordBreak="break-all"
    document.querySelector("textarea").value = "";
    }

}

function clearAll(){
    localStorage.clear();
    document.getElementById("list").textContent = "";
}