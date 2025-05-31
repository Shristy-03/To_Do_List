let b = document.querySelector("button");
let u = document.querySelector("#todo-list");
let i = document.querySelector("#new-task");
let form = document.querySelector("#todo-form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from reloading the page
    let li = document.createElement("li");
    li.innerText = i.value + " ";

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(delBtn);
    li.style.fontSize = "30px";
    li.style.marginBottom = "40px";
    u.appendChild(li);
    i.value = "";
});