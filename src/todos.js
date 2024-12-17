import { Task } from './classes.js';

const projects = document.getElementById('projects');



    const div = document.createElement('div');
    const title = document.createElement('h3');
    const desc = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');

    title.innerHTML = task.title;
    desc.innerHTML = task.desc;
    dueDate.innerHTML = task.dueDate;
    priority.innerHTML = task.priority;

    div.appendChild(title);
    div.appendChild(desc);
    
    div.appendChild(dueDate);
    div.appendChild(priority);

    projects.appendChild(div);
