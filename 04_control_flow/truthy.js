const userEmail = 'false'
if(userEmail){
    console.log("Got user eamil");
}else{
    console.log("Dont have user email");
    
}

// falsy values

// false , 0 , -0 , Bigint 0n , null , undefined , NaN ,"" //

// truthy values 
// "0" , 'false' , " " , [] , {} ,  function(){} // empty fun is also a truthy val


// how to chech arr in if else con 
// const arr = []
// if(arr === 0 ){
// console.log("array is empty");
// }

// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");   
// }

// false == 0 , false = '' , 0 == '' all eq are true

//  Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);


// Terniary operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

