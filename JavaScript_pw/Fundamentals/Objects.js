let obj = {id:101 , name : "Alex" , salary: 10000};

let obj2 = new Object();
obj2.id = 100;
obj2.name = "Abhishek"
obj2.salary = 50000;
console.log(obj2);
console.log(obj);

//Create objects by using function
function Abhi(i , n , s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

const A = new Abhi(103, "Lutun" , 25000)
console.log(A);

//Access an key value of object
console.log(obj2.name);
console.log(obj2.id);
      //Another method
console.log(obj2['name']);

//Assign new value or update value
obj2.id = 130;
console.log(obj2);

//To delete key value 
delete obj2.id
console.log(obj2);

//To extract keys of an object 
let obj3 = {
    id: 150 ,
    name : "Abhi",
    age : 22
}
// It will print keys in form of array
let keys = Object.keys(obj3)
console.log(keys);

//To extract values 
let values = Object.values(obj3)
console.log(values);

// To Extract  keys and values combinedly
let entries = Object.entries(obj3)
console.log(entries);

// To deny any update or add new key value pair 
Object.freeze(obj2)  // No update and no entry

//if you want to only update then 
Object.seal(obj2); // Only updates are allowed no entries


// To assign all parameters of a old object in a new object
let obj4 = Object.assign({} , obj2)
console.log(obj4);