const projects = document.getElementById('projects');

function displayProject(task){
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
}

function displayModal(){
    // Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("addTaskbtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}


export { displayProject, displayModal };