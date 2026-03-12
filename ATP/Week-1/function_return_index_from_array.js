// arrow function
const searchElement = (arr, element) => {

    for (let i = 0; i < arr.length; i++) {

        // check if element found
        if (arr[i] === element) {
            return i;
        }
    }

    return "not found";
}

//function call
console.log(searchElement([10,20,30,40], 30));
console.log(searchElement([10,20,30,40], 50));