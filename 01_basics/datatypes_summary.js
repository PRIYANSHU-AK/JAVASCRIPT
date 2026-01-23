// Primitive 

// 7 Types : String , Number , Boolean , null , BigInt , undefined , Symbol

const score = 100;
const scoreValue = 100.2

const isloggedIn = false 
const outside = null
let userEmail;

const id = Symbol("123")
const loginid = Symbol("123")

console.log(id === loginid);

const bigNumber = 34912646879346n


// Reference (Non-Primitive)

//  Array , Object , Functions

const heros = ["IronMan"  , " SuperMan" , "Thor" ];
let myObj = {
    name : "Priyanshu",
    age : 18
}

const MyFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof MyFunction);

// **************************************************************

// Stack(Primitive) , Heap(Non-Primitive)

let day = "friday"
let anotherDay = day
anotherDay ="sunday"
console.log(anotherDay);
console.log(day);

let userOne = {
    email : "abc@gmail.com",
    upi : "apl@ybl"
}
let userTwo = userOne

userTwo.email = "Priyanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
