const myDate = new Date()
console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate);    // kafi br interview m pucha jata h date ky h ans object 

// let createdMyDate = new Date(2025 , 0 , 25)
// let createdMyDate = new Date(2025 , 0 , 25 , 5 , 3)
// let createdMyDate = new Date("2025-01-25")
let createdMyDate = new Date("01-25-2026")
// let createdMyDate = new Date()
// console.log(createdMyDate);

// console.log(createdMyDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// console.log(createdMyDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());

newDate.toLocaleDateString('default',{
    weekday : "long"
})

