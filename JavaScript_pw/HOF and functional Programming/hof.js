const powerTwo = (n) => {
    return n ** 2
}
function powerCube (powerTwo, n) {
    return powerTwo(n) * n 
}

// console.log(powerCube(powerTwo, 3));

function sayHello() {
    return () => {
        console.log("Hello Abhi");
    }
}

let guessValue = sayHello()
// console.log(guessValue);

// guessValue()


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2) (3) (4));

const myNums = [2,3,4,5]

const sumArray = arr => {
    let total = 0
    arr.forEach(element => {
        total += element
    });
    return total
}

// console.log(sumArray(myNums));


function oneMoreHello() {
    console.log("Hello Abhishek! ",Math.random()* 15);
}
setInterval(oneMoreHello , 1000)    //execute the function per time interval
// setTimeout(oneMoreHello, 2000)    execute the functin after the time interval of _____