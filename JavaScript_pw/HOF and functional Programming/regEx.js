//Regular Expression
let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi   //Here g => global & i => case insensitive 

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherMethod = strToCheck.match(regExThree)
console.log(anotherMethod);

const oneMoreResult = strToCheck.replace(regExThree, 'p--w')
console.log(oneMoreResult);


//Pattern Matching
//real life scenario
const webUrl = "https://pwskills.com/abhishek%31behera"

const usableUrl = webUrl.replace(/%\d\d/, '-')
console.log(usableUrl);