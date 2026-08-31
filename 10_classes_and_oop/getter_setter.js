class User{
    constructor(email , password){
        this._email = email
        this._password = password
    }

 get email(){
    return this._email.toUpperCase()
 }
set email(value){
   this._email = value
}
 get password(){
    return  `${this._password}priyanshu`
 }
set password(value){
   this._password = value
}

}

const priyanshu = new User("P@ai.com" , "wer456")
console.log(priyanshu["email"])
console.log(priyanshu["password"])