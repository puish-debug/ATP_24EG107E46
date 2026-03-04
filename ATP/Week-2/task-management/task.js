import {validatetitle,validatepriority,validateduedate} from './validator.js';

const task=[];

// functions to add new task if and only if it is valid
function addTask(title, priority, dueDate) {
    if(validatetitle(title) && validatepriority(priority) && validateduedate(dueDate)){
        task.push({title,priority,dueDate});
        return;
    }
    return("Invalid");
}
                    
//functions to get all tasks
function getAllTasks() {
    return task;
}
                    
// functions to mark task as complete
function completeTask(taskId) {
    return true;
}

// exporting functions to app.js
export {addTask,getAllTasks,completeTask};