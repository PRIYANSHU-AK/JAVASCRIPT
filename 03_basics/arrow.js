// const user = {
//     username : "Priyanshu",
//     price : 999 ,

//     WelcomeMessage : function(){
//         console.log(`${this.username} , Welcome to the website`);
//         console.log(this);
        
//     }
// }

// user.WelcomeMessage()
// user.username = "mike"
// user.WelcomeMessage()

// console.log(this);       // {}



// function whey(){
//     let username = "Priyanshu"
//     console.log(this.username);        // this yha is function m use ni hoga
    
// }
// whey()


// const whey = function () {
//      let username = "Priyanshu"
//      console.log(this.username);        
// }


const whey = () => {
     let username = "Priyanshu"
     console.log(this.username);        
}
// whey()


// const addTwo = (num1 , num2) => {
//  return num1 + num2           // exlicit return 
// }
// const addTwo = (num1 , num2)  => num1 + num2  // implicit
// const addTwo = (num1 , num2)  => ( num1 + num2)

// const addTwo = (num1 , num2)  =>  ({username : "priyanshu"})


// console.log(addTwo(3,4));


