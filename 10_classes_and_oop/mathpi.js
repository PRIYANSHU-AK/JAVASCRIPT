const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter)
console.log(Math.PI)

const chai = {
    name : "mastchai",
    price : 450 ,
    isAvailable : true ,

    orderChai : function(){
        console.log("can't make tea")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))


Object.defineProperty(chai , "price",{
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [k , v] of Object.entries(chai)) {
    if(typeof v !== 'function'){

        console.log(`${k} : ${v}`)
    }
}