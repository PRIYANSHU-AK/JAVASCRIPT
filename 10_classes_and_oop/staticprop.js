class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`)
    }
    static createid(){
        return `123`
    }
}

// console.log(User.createid())
const priyanshu = new User("Priyanshu")
// console.log(priyanshu.createid())

class Teacher extends User {
    constructor(username , email){
        super(username) 
        this.email = email
    }

}
console.log(Teacher.createid())
// const iphone = new Teacher("iphone" , "iphone@gmail.com")
// console.log(iphone.createid())