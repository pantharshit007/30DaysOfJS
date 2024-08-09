// Day 27: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197481
// TODO he tha!

const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

const titleElem = document.getElementById('title');
const descriptionElem = document.getElementById('description');
const dueDateElem = document.getElementById('dueDate');
const addButton = document.getElementById('addbutton');

let tasks = [];
let isEditing = false;
let editingIndex = null;

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
})

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleElem.value
    const description = descriptionElem.value
    const dueDate = dueDateElem.value

    if (isEditing) {
        tasks[editingIndex] = { id: editingIndex + 1, title, description, dueDate };
        isEditing = false;
        editingIndex = null;
        addButton.textContent = 'Add Task';
    } else {
        const id = tasks.length + 1;
        const data = JSON.stringify({ id, title, description, dueDate })
        addTask(data)
    }

    // console.log(data)
    titleElem.value = '';
    descriptionElem.value = '';
    dueDateElem.value = '';
    saveTasks()
    loadContent()
})

function addTask(data) {
    const newTask = JSON.parse(data)
    tasks.push(newTask)
    console.log(tasks)
}

function editTask(index) {
    const task = tasks[index];
    titleElem.value = task.title;
    descriptionElem.value = task.description;
    dueDateElem.value = task.dueDate;

    isEditing = true;
    editingIndex = index;
    addButton.textContent = 'Edit Task';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks()
    loadContent()
}

function displayTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const body = document.createElement('div');
        body.classList.add('task-card');

        body.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due Date: ${task.dueDate}</p>
                <div class="funcBtn">
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;

        taskList.appendChild(body);
    });
}

function loadContent() {

    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        displayTasks(tasks);
    } else {
        taskList.textContent = 'No tasks available'
        return;
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
