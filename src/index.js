import { Task, Project } from './classes.js';
import { displayProject, displayModal } from './mainpage.js';
import './style.css';

const todos = new Project('Todos', 'todos');

function createTask(title, desc, dueDate, priority){
    const task = new Task(title, desc, dueDate, priority);
    todos.tasks.push(task);
}

createTask('crear', 'proyecto', '20/23/56', 'alta');

for (const task of todos.tasks){
    displayProject(task);
}

displayModal();