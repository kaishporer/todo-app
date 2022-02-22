const tasks = document.getElementById("newtaskinput");
const taskList = document.getElementsByClassName("taskslist")[0];
let toDos = [];
console.dir(taskList);

let currentId = 1;

function addATask() {
  let task = tasks.value;
  let idNew = currentId++;
  toDos.push({ id: idNew, title: task, date: new Date() });
  renderList();
  styleList();
}

function renderList() {
  taskList.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const todo = toDos[i];

    taskList.innerHTML +=
      "<li>" + todo.title + "&nbsp" + todo.date.toLocaleString() + "</li>";
  }
}

function styleList() {
  taskList.style.color = "blue";
  taskList.style.fontSize = "30px";
}
