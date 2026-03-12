let marks = [90, 78, 65, 98];

// assume first element as smallest
let smallest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] < smallest) {
        smallest = marks[i];
    }
}

console.log("Smallest mark:", smallest);