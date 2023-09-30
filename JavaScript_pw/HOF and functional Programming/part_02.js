let arr = [2,3,4]

arr.forEach(function(element, index, arr) {
       console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("Arrow" , index, element, arr);
})

arr.map(function(element, index , arr) {
    console.log(element , index, arr);    //Map function is alternative of forEach function
})

const heros = ["naagraj" , "doga" , "dhruva" , "maniraj"]

heros.forEach((el) => {console.log(el.toUpperCase())})

heros.map((element) => {console.log(element.toUpperCase())})    //Map function is alternative of forEach function


//Filter function
console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith("raj");
})
console.log(herosWithRaj);


//Shopping Cart
const cartBill = [20 ,30, 50]
const sumOfCartBill = cartBill.reduce((prev , curr) => prev+curr, 0)
console.log(sumOfCartBill);

//Check if all values are numbers
const gameScore = [200, 300, 310, 250, 150, "2"]
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check:" , gameScoreCheck);


//Find score above 200
const above200 = gameScore.find((score) => score > 200) 
console.log(above200);
