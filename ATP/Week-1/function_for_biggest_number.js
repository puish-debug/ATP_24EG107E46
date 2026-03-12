function findBig(a, b, c) {

    // compare numbers
    if (a > b && a > c) {
        return a;
    } 
    else if (b > a && b > c) {
        return b;
    } 
    else {
        return c;
    }
}

//function call
console.log(findBig(10, 30, 20));