const btn = document.getElementById("addBtn")
const task = document.getElementById("task")
const entryList = document.getElementById("list")

btn.addEventListener("click", addTask)

function addTask(){
    if(task.value == ""){
        alert("enter something bitch");
        return;
    }

    const a = task.value
    const b = document.createElement("li")
    b.innerHTML = a
    entryList.appendChild(b)
    saveWork()
    task.value = ""
}
entryList.addEventListener("click", updateContent)

function updateContent(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
    }
    saveWork()
}

function saveWork(){
    localStorage.setItem("tasks", entryList.innerHTML)
}

function getWork(){
    entryList.innerHTML = localStorage.getItem("tasks")
}
getWork()



