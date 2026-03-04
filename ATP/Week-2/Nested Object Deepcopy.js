//nested object creation
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

//creating a copy of order by using deepshallo operator
let copyorder=structuredClone(order);

//making changes in the copyorder
copyorder.customer.address.city="Rajasthan";
copyorder.items[0].price=500;

//printing the both original and copied object
console.log(order);
console.log(copyorder);