document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  let tasks = [];

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      tasks.push(taskText);
      taskInput.value = "";
      renderTaskList();
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const taskIndex = event.target.parentElement.dataset.index;
      tasks.splice(taskIndex, 1);
      renderTaskList();
    } else if (event.target.classList.contains("edit-button")) {
      const taskIndex = event.target.parentElement.dataset.index;
      const updatedTask = prompt("Edit task:", tasks[taskIndex]);
      if (updatedTask !== null) {
        tasks[taskIndex] = updatedTask;
        renderTaskList();
      }
    }
  });

  function renderTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
                <span class="task-text">${task}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
      taskItem.dataset.index = index;
      taskList.appendChild(taskItem);
    });
  }
});
