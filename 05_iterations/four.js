const myObject = {
    JS : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    py : "pyton"
}
for (const i in myObject) {
    // console.log(myObject[i]);
    // console.log(i);

    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["rb" , "java" , "cpp" ,"Py"]

for (const key in programming) {
    console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United State Of America")
// map.set('Fr' , "France")
// map.set('IN' , "India") 

// for (const key in map) {
//  console.log(key);
    
// }     // map is not iterable