//SPREAD OPERATOR
const oneArray = [1,2,3,4]

const twoArray = [5,6,7,8]

// const threeArray = oneArray.concat(twoArray)

// const threeArray = [oneArray , twoArray]

const threeArray = [...oneArray, ...twoArray] //...spread operator 
console.log(threeArray);

// -----------------------------******------------******--------------------------------------------
                    //REST OPERATOR
//Object to array conversion
function objectToArray() {
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArray = args.map(e => e )
    console.log(finalArray);
}
function objectToArray2(...args) {
      console.log(typeof args);
      let finalArray = args.map(e => e) 
      console.log(finalArray);
}


// objectToArray(1,2,3)
// objectToArray2(1,2,3,4,5,6)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["superman" , "flash"]
const newNames = ["batman" , ...names , "thor"]  //Spread 

const siteName = "pwskills"
console.log([...siteName]);  //spread

function pwSkills(...value) {
    return value
}

console.log(pwSkills("superman" , "flash"));  //Rest