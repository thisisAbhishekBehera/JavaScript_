let arr = [1,2,3,4,5];
arr.push(6,7);//To add at last index
console.log(arr);

arr.pop();// to remove from last index
console.log(arr);

arr.shift();//To remove fist index
console.log(arr);

arr.unshift(9);// To add at first index
console.log(arr);

let a1 = [1,2,3,4,5]
let a2 = [3,4,5]
let a3 = a1.concat(a2) // if we want to join two arrays
console.log(a1, a2, a3);

let s = a3.join(">");// To add some character between elements of array
console.log(s);//It also converts array into string

a3.reverse()//to reverse an Array

console.log(a3);

console.log(a3.indexOf(3));//To find the index of a particular element


let arr1 = [1,2,3,4,5,6,]
console.log(arr1.slice(2,5));//To fetch contiguous part of an Array, In the parameter we enter the index of start & end

arr1.splice(2,1,11)//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr1);