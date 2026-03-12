// function expression
const arraySum = function(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

//function call
console.log(arraySum([90, 78, 65, 98]));