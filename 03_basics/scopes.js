var  c= 300 
let a = 50
if(true){
 let a = 0 
 const b = 9
//  console.log("Inner :" , a);
 
 c = 90
}
// console.log(a);
// // console.log(b);
// console.log(c);


function one(){
    const username = "priyanshu"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()

if(true){
    const username ="priyanshu"
    if( username === "priyanshu"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++++++++++++++++++++++  intersting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


console.log(addone(5))
function addone(num) {
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return addTwo + 2
}