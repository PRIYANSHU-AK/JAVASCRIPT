// // const user = {
// //     username : "Priyanshu",
// //     loginCount : 9,
// //     signedin : true,

// //     getUserDetails : function(){
// //         // console.log("function is completed")
// //         // console.log(`Username ${this.username}`)
// //         // console.log(this)
// //     }
// // }

// // console.log(user.username)
// // console.log(user.getUserDetails())
// // console.log(this)


// function User(username , loginCount , isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn
//     this.greeting = function(){
//         console.log(`welcome ${this.username}`)
//     }
//      return this
// }

// const UserOne = new User("Priyanshu" , 12 , true)
// const UserTwo = new User("Yours" , 11 , false)
// // console.log(UserOne.constructor)
// console.log(UserTwo)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
console.log(userTwo);