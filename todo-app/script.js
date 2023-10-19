let taskList = [];
const taskListContainer = document.querySelector(".task-list-container");
const messageBox = document.querySelector(".message-box");
const taskForm = document.querySelector(".task-form");
const textInputField = document.querySelector(".text-input");
const addButton = document.querySelector(".add-button");
const clearButton = document.querySelector(".clear-button");

addButton.disabled = true;
function showMessageBox(message) {
    messageBox.textContent = message;
    messageBox.style.visibility = "visible";
}
function hideMessageBox(time) {
    setTimeout(() => {
        messageBox.style.visibility = "hidden";
    }, time);
}

function renderTaskList() {
    for (let index = 0; index < taskList.length; index++) {
        let tasks = taskList[index];
        if (!tasks.isTaskInDOM) {
            tasks.isTaskInDOM = true;
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            taskItem.id = `task-${tasks.taskId}`;

            let task = document.createElement("li");
            task.classList.add("task");
            task.innerHTML = tasks.taskTitle;

            let doneButton = document.createElement("div");
            doneButton.classList.add("done-button");
            doneButton.innerHTML = `&#10003;`

            let deleteButton = document.createElement("div");
            deleteButton.classList.add("delete-button");
            deleteButton.innerHTML = `&#128465;`

            taskItem.appendChild(task);
            taskItem.appendChild(doneButton);
            taskItem.appendChild(deleteButton);
            taskListContainer.appendChild(taskItem);
        }
        if (tasks.isTaskDone) {
            const doneTask = document.querySelector(`#task-${tasks.taskId}`);
            // console.log("Done task = " + doneTask);
            doneTask.firstChild.classList.add("done");
            showMessageBox("Hurray! Task Done.")
            hideMessageBox(2500);
        }
        else {
            const doneTask = document.querySelector(`#task-${tasks.taskId}`);
            if (doneTask.firstChild.classList.contains("done")) {
                doneTask.firstChild.classList.remove("done");
                showMessageBox("Task Opened Again");
                hideMessageBox(2500);
            }
        }
    }
}

function addNewTask() {
    const newTask = {
        "taskId": taskList.length === 0 ? 1 : taskList[taskList.length - 1].taskId + 1,
        "taskTitle": textInputField.value,
        "isTaskDone": false,
        "isTaskInDOM": false
    }
    textInputField.value = "";
    taskList.push(newTask);
    renderTaskList();
    showMessageBox("Task Added");
    hideMessageBox(2500);
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (textInputField.value === "") {
        showMessageBox("Write a task first before adding")
        hideMessageBox(2000);
    }
    else if (textInputField.value.length > 5) {
        addNewTask();
    }
});


textInputField.addEventListener("input", (event) => {
    if (textInputField.value.length > 0 && textInputField.value.length <= 5) {
        textInputField.style.border = "1px solid red";
        showMessageBox("Task should contain atleast 6 characters.");
        addButton.disabled = true;
    }
    else if (textInputField.value.length === 0) {
        addButton.disabled = true;
        hideMessageBox(0);
    }
    else {
        addButton.disabled = false;
        textInputField.style.borderColor = "black";
        hideMessageBox(0);
    }
});
textInputField.addEventListener("keyPress", (event) => {
    const pressedKey = event.key;
    if (pressedKey === "Enter" && taskTitle.length > 5) {
        addNewTask();
    }
});


taskListContainer.addEventListener("click", (event) => {
    const targetClass = event.target.className;
    if (targetClass === "done-button") {
        const parentContainer = event.target.parentNode;
        const currentTaskId = parentContainer.id.split("-")[1];
        const taskDone = taskList.find((task) => task.taskId == currentTaskId);
        // console.log(`Task (${taskDone.taskId}) (${taskDone.taskTitle}) DONE`);
        taskDone.isTaskDone = (taskDone.isTaskDone === true) ? false : true;
        renderTaskList();
    }
    else if (targetClass === "delete-button") {
        const parentContainer = event.target.parentNode;
        const currentTaskId = parentContainer.id.split("-")[1];
        const currentTask = (taskList.filter((task) => task.taskId == currentTaskId))[0];
        taskList = taskList.filter((task) => task.taskId != currentTask.taskId);
        // console.log(`Task (${currentTask.taskId}) (${currentTask.taskTitle}) DELETED`);
        parentContainer.remove();
        showMessageBox("Task Permanently Deleted");
        hideMessageBox(2000);
    }
});




/**
function createmessageBox(errorMessage) {
    if (messageBox) {
        messageBox.textContent = errorMessage;
    }
    else {
        messageBox = document.createElement("div");
        messageBox.classList.add("error-box");
        messageBox.textContent = errorMessage;

        const appContainer = document.querySelector('.app-container');
        appContainer.insertBefore(messageBox, appContainer.firstChild);
    }
}

function removemessageBox() {
    const messageBox = document.querySelector(".error-box");
    if (messageBox) {
        messageBox.remove();
    }
    else {
        console.log("No error box to remove");
    }
}

*/