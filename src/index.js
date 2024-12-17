import { Task, Project } from './classes.js';
import { displayProject, displayModal } from './mainpage.js';
import './style.css';

const todos = new Project('Todos', 'todos');
const projects = document.getElementById('projects');

function createTask(title, desc, dueDate, priority){
    const task = new Task(title, desc, dueDate, priority);
    todos.tasks.push(task);
}

createTask('crear', 'proyecto', '20/23/56', 'alta');

displayModal();

for (const task of todos.tasks){
    displayProject(task);
}

const form = document.getElementById('taskForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const desc = document.getElementById('desc').value;
        const dueDate = document.getElementById('dueDate').value;
        const prior = document.getElementById('prior').value;

        createTask(title, desc, dueDate, prior);

        projects.innerHTML = '';
        for (const task of todos.tasks){
            displayProject(task);
        }

        form.reset();
    })