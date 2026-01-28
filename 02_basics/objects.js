// Singleton
// object.create

// object literals

const mysym = Symbol("Key1")
 const JsUser = {
    name : "Priyanshu",
    "full name" : "Priyanshu Sharma",
    [mysym] : "Key1",
    age : 18,
    location : "ghaziabad",
    email : "Priyanshu@microsoft.com",
    isLoggedIn : false,
    lastLoginDays : ["Tuesday" , "Friday"]

 }

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);       // [ ] this is used for object rep if the key is in string or its a symbol otherwise we can use .
//  console.log(JsUser[mysym]);
 
 JsUser.email = "Priyanshu.mine.com"
//  Object.freeze(JsUser)
 JsUser.email = "Priyanshu@wrong.com"
//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
 }
JsUser.greetingTwo = function(){
    console.log(`Hello JS user1 , ${this.name}`);
 }
 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 
 