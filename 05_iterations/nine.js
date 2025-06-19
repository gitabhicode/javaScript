const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc , currval) => acc + currval, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "mobile dev couse",
        price: 5999
    },
    {
        itemName: "pw skills",
        price: 9992
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0)
console.log(priceToPay);
