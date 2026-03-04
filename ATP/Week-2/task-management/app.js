import {addTask,getAllTasks,completeTask} from './task.js';
                  
//adding task to the task array
addTask("Hero","high","2027-10-23");
addTask("Legend","low","2027-09-23");
console.log(addTask("Ld","low","2027-09-23"));

// displaying all the tasks
console.log(getAllTasks());