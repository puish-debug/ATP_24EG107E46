//function to validate the title which must be non empty and min of 3 chars
function validatetitle(title){
    if(title && title.length>=3){
        return true;
    }
    return false;
}

//function to validate priority (must be: low, medium, high)
function validatepriority(priority){
    if(priority=='low' || priority=='medium' || priority=='high'){
        return true;
    }
    return false;
}

//function to validate due date (must be future date)
function validateduedate(date){
    let today=new Date();
    let inputdate = new Date(date);
    if(inputdate>today){
        return true;
    }
    return false;
}

//exporting the functions to task.js
export {validatetitle,validatepriority,validateduedate};