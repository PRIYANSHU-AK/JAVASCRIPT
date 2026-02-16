const coding  = ["java" , "cpp" , "pyton" , "ruby" , "js"]

// coding.forEach( function (arr) {
// console.log(arr);

// })

// coding.forEach( (arr) => {
// console.log(arr);

// // })

// function printme (item ){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item , index , arr)=> {
// console.log(item , index , arr );
// })

const myCoding = [
    {
        languagenName : "javascript",
        languageFileName : "js"
    },
    {
        languagenName : "java",
        languageFileName : "java"
    },
    {
        languagenName : "pyton",
        languageFileName : "py"
    },
]

myCoding.forEach ((item) => {
    console.log(item.languagenName);
    
})