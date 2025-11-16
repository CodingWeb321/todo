let listing = document.querySelector("#list");
let taskDone = document.querySelector("#taskDone");
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");

let myArray = [
  { id: 1, task: `Buy a milk`, done: true },
  { id: 2, task: `Morning walk`, done: true },
  { id: 3, task: `Exercise for 30 min`, done: true },
  { id: 4, task: `Cold Shower`, done: false },
  { id: 5, task: `Coding for 2 hrs`, done: false },
  { id: 6, task: `Learning js for hrs`, done: true },
];

function updateStatus() {
  let total = myArray.length;
  let countDone = myArray.filter((item) => item.done).length;

  taskDone.innerText = `Status about Task \u2764\uFE0F
   
 Completed Task : ${countDone} | Remaining Task : ${total - countDone}`;
}

function renderingList() {
  listing.innerText = "";

  myArray.forEach((item) => {
    //list item
    let li = document.createElement("li");
    li.innerText = " " + item.task;

    //check box
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = item.done;

    checkBox.addEventListener("change", () => {
      item.done = checkBox.checked;
      updateStatus();
    });

    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      myArray = myArray.filter((i) => i.id !== item.id);

      li.remove();
      updateStatus();
    });

    listing.appendChild(li);
    li.prepend(checkBox);
    li.append(deleteButton);
  });

  updateStatus();
}

renderingList();

addTaskBtn.addEventListener("click", () => {
  const newTask = taskInput.value;

  let randomBit = Math.floor(Math.random() * 2);
  let doneValue = randomBit ? true : false;

  //new object for the added task.
  const taskObject = {
    id: myArray.length + 1,
    task: newTask,
    done: doneValue,
  };
  myArray.push(taskObject);

  taskInput.value = " ";

  renderingList();
});
