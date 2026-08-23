// new Promise(function(resolve,rejecct){
//     // console.log("Hii I am a promise")
//     setTimeout(function(){
//         console.log('resolve it')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("function complete")
// })

// const PromiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async it ")
//         resolve()
//     })
// },1000)
// PromiseOne.then(function(){
//     console.log("fun com")
// })

// const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username: "priyanshu" , email : "priyanshu@biometrik.com"})
//     },1000)
// })
// PromiseThree.then((user)=>{
//     console.log(user)
// })

// const PromiseFour = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//     let error = true
//     if(!error){
// resolve({username : "xyz" , password : "321"})
//     } else{
//         reject("Error : something went wrong")
//     }
// },1000)
// })
// PromiseFour
// .then(function(work){
//     console.log(work)
//     return work.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(e){
// console.log(e)
// })
// .finally(() => console.log("The Promise is either resolved or rejected"))

const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
    let error = false
    if(!error){
resolve({username : "xyz" , password : "321"})
    } else{
        reject("Error : something went wrong")
    }
},1000)
})
 
async function consumePromiseFive(){
    try {
      const response =   await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E : " , error)
    }

}
getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
return response.json()
})
.then((data)=>{
console.log(data)
})
.catch((error)=> console.log(error))