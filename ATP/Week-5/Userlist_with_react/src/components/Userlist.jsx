import User from "./User";

function Userlist(){

    const users = [
        {
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Vivaan Patel",
            email: "vivaan.patel@example.com",
            image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            name: "Aditya Singh",
            email: "aditya.singh@example.com",
            image: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            name: "Sai Kumar",
            email: "sai.kumar@example.com",
            image: "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            name: "Rohan Reddy",
            email: "rohan.reddy@example.com",
            image: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            name: "Ananya Gupta",
            email: "ananya.gupta@example.com",
            image: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            name: "Isha Verma",
            email: "isha.verma@example.com",
            image: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            name: "Priya Nair",
            email: "priya.nair@example.com",
            image: "https://randomuser.me/api/portraits/women/13.jpg"
        }
    ];

    return(
        <div>
            <div className="grid grid-cols-4 gap-10 text-center">
                {
                    users.map((userObj)=><User user={userObj} key={userObj.email}/>)
                }
            </div>
        </div>
    )
}

export default Userlist;