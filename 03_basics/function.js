function myname(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}
// myname()

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumber(3,4)
function addTwoNumber(number1 , number2){
    // let result = number1 + number2
    // // console.log("Priyanshu");
    // return result
    // console.log("Priyanshu");         // nerver print cozzz   a function cant work after return 
    return number1 + number2
}
// const result = addTwoNumber(3,4)
// console.log("Result : " , result);
// console.log(addTwoNumber(4,5))

// function loginUserMessage(Username){
//     // if(Username == undefined){
//     //     console.log("Please enter a username");
//     //     return 
//     // } both if condition means same
//     if(!Username){
//         console.log("Please enter a username");
//         return 
//     }
//   return `${Username} just logged in`
// }

// console.log(loginUserMessage("priyanshu"))

function calculateCartPrice(val1 , val2 , ...num) {
    return num
}
// console.log(calculateCartPrice(399,789,879,800));

const user = {
 username : "priyanshu",
 price : 999
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username : "priyanshu",
    price : 549
})

const myNewArray = [700 , 900 ,800 ,600]

function getSecondValue(getArray){
return getArray[3]
}

// console.log(getSecondValue(myNewArray));
console.log(getSecondValue([900 , 800 ,700 ,600]));
