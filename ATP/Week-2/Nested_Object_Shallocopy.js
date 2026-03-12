//nested object creation
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};    

//creating a copy of user by using shaloo operator
let copyuser={...user};

//making changes in the copyuser
copyuser.name="puish";
copyuser.preferences.theme="white";

//printing the both original and copied object
console.log(user);
console.log(copyuser);