// const TinderUser = new Object()        //   its a singleton object 

const TinderUser = {}
TinderUser.id = "123abc"
TinderUser.name = "Tilak"
TinderUser.isLogggedIn = false
// console.log(TinderUser);

const regularUser = {
    email : "mine@amazon.com",
    fullname : {
       userfullname :{
        firstname : "Priyanshu",
        lastname : "Sharma"
       }
    }

}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {5:"e" , 6:"f"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({} , obj1 , obj2 , obj3)

const obj4 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj4);

const User = [
    {
        id : 1,
        email : "p@gmail.com"
    },
    {
        id : 1,
        email : "p@gmail.com"
    },
    {
        id : 1,
        email : "p@gmail.com"
    }
]

// User[1].email
// console.log(TinderUser);

// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

// console.log(TinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "javascript",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name" : "Priyanshu",
//     "course" : "javascript",
//     "price" : "free"
// }              json format 