let lists = JSON.parse(localStorage.getItem("todoLists")) || [];
let currentListIndex = null;

function saveLists() {
    localStorage.setItem("todoLists", JSON.stringify(lists));
}

// Create a new list
function createList() {
    let listName = document.getElementById("new-list-name").value.trim();
    if (listName === "") return;

    lists.push({ name: listName, items: [] });
    saveLists();
    renderLists();
    document.getElementById("new-list-name").value = "";
}

// Render list names in the sidebar
function renderLists() {
    let listNamesContainer = document.getElementById("list-names");
    listNamesContainer.innerHTML = "";

    lists.forEach((list, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
        <span onclick="selectList(${index})">${list.name}</span>
        <button onclick="renameList(${index})">Edit</button>
        <button onclick="deleteList(${index})">Delete</button>
        `;
        listNamesContainer.appendChild(listItem);
    });
}

// Rename a list
function renameList(index) {
    let newName = prompt("Enter new list name:", lists[index].name);
    if (newName && newName.trim() !== "") {
        lists[index].name = newName.trim();
        saveLists();
        renderLists();
        if (currentListIndex === index) {
            document.getElementById("current-list-title").textContent = newName;
        }
    }
}

// Delete a list
function deleteList(index) {
    if (confirm("Are you sure you want to delete this list?")) {
        lists.splice(index, 1);
        saveLists();
        renderLists();

        // If the deleted list was selected, clear the main panel
        if (currentListIndex === index) {
            document.getElementById("current-list-title").textContent = "Select a list";
            document.getElementById("task-section").style.display = "none";
            currentListIndex = null;
        }
    }
}

// Select a list to display in the main panel
function selectList(index) {
    currentListIndex = index;
    document.getElementById("current-list-title").textContent = lists[index].name;
    document.getElementById("task-section").style.display = "block";
    renderTasks();
}

// Add a new task to the current list
function addTask() {
    if (currentListIndex === null) return;

    let taskInput = document.getElementById("new-task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    lists[currentListIndex].items.push(taskText);
    saveLists();
    renderTasks();
    taskInput.value = "";
}

// Render tasks in the main panel
function renderTasks() {
    let tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

    lists[currentListIndex].items.forEach((task, taskIndex) => {
        let taskItem = document.createElement("li");
        taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${task}</span>
        <div class="task-buttons">
        <button onclick="editTask(${taskIndex})">Edit</button>
        <button onclick="deleteTask(${taskIndex})">Delete</button>
        </div>
        `;
        tasksContainer.appendChild(taskItem);
    });
}

// Edit a task
function editTask(taskIndex) {
    let newTask = prompt("Edit task:", lists[currentListIndex].items[taskIndex]);
    if (newTask) {
        lists[currentListIndex].items[taskIndex] = newTask;
        saveLists();
        renderTasks();
    }
}

// Delete a task
function deleteTask(taskIndex) {
    lists[currentListIndex].items.splice(taskIndex, 1);
    saveLists();
    renderTasks();
}

// Load lists on page load
document.addEventListener("DOMContentLoaded", renderLists);
