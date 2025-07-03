// Array to hold tasks
let tasks = [];

// DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const feedback = document.getElementById("feedback");

// Add task event
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    feedback.textContent = "";

    if (taskText === "") {
        feedback.textContent = "Task cannot be empty.";
        return;
    }
    if (tasks.includes(taskText)) {
        feedback.textContent = "Task already exists.";
        return;
    }

    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";

        const span = document.createElement("span");
        span.textContent = task;

        // Actions
        const actionsDiv = document.createElement("div");
        actionsDiv.className = "actions";

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-sm btn-warning";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editTask(index));

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-danger";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(index));

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actionsDiv);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null) {
        const trimmed = newTask.trim();
        if (trimmed === "") {
            alert("Task cannot be empty.");
            return;
        }
        if (tasks.includes(trimmed) && trimmed !== tasks[index]) {
            alert("Task already exists.");
            return;
        }
        tasks[index] = trimmed;
        renderTasks();
    }
}
