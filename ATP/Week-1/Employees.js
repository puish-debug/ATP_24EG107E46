const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

// Insert new employee at 2nd position (index 1)
employees.splice(1,0,{
  eno:106,
  name:"Arjun",
  marks:[80, 85, 88]
});


// Remove employee with name "Kiran"
for (let i=0;i<employees.length;i++) {
  if (employees[i].name=="Kiran") {
    employees.splice(i,1);
    break; // stop loop after removing
  }
}


// Change last mark 95 to 75 of "Sneha"
for (let i=0;i<employees.length;i++) {
  if (employees[i].name=="Sneha") {
    let lastIndex=employees[i].marks.length-1;
    employees[i].marks[lastIndex]=75;
    break; // stop loop after updating
  }
}

console.log(employees);