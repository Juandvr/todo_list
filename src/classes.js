class Task {
    state = "";

    constructor(title, desc, dueDate, priority){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDate(newDate){
        this.dueDate = newDate;
    }

    setDesc(newDesc){
        this.desc = newDesc;
    }

    setPriority(newPriority){
        this.priority = newPriority;
    }

    setState(newState){
        this.state = newState;
    }
}

class Project {
    tasks = [];

    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDesc(newDesc){
        this.desc = newDesc;
    }
}

export { Task, Project };