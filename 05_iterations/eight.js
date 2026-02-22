const myNums = [1 , 2 , 3 ]
// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)

// console.log(myTotal);

// const myTotal = myNums.reduce((acc,curr) => (acc+curr),0)
// console.log(myTotal);

const shoppingCart =  [
    {
        itemName : "Js course",
        price : 2999
},
    {
        itemName : "py course",
        price : 999
},
    {
        itemName : "cpp course",
        price : 3999
},
    {
        itemName : "data Science course",
        price : 13999
},
]

const priceToPay = shoppingCart.reduce((acc , item) => (acc + item.price),0)
console.log(priceToPay);
