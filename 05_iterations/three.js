// for off

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [ 1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

// const greeting = "Hello World"
// for (const greet of greeting) {
//     // console.log(` Each char is ${greet}`);
//     if(greet === " "){
//         continue
//     }
//     console.log(greet);
    
// }

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('Fr' , "France")
map.set('IN' , "India")   //MAP HAS UNIQUE VALUE

// console.log(map);

for (const [key , value] of map) {
    // console.log(key , "-:" , value);
    
}

const myobject = {
    game1 : "NFS",
    game2 : "spiderman"
}

// for (const [key , value ] of myobject) {
//     console.log(key , "-:" , value);
    
// }         not iterable at object 