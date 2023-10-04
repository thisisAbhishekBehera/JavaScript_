let myHeros = ["thor" , "Spiderman"]
let dcHeros = ["batman" , "flash" , "superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects`);
}

console.log(myHeros.hitesh());
console.log(heroPower.hitesh());

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says Hi`);
}

console.log(myHeros.heyHitesh());
// console.log(heroPower.heyHitesh());

//Inheritance

const user = {
    name: "top name",
    email: "top@gmail.com"
}

const Teacher = {
    makeVideoes: true
}

const TeachingSupport = {
    isAvailable: false 
}

const TAAssistant = {
    makeAssignments :"js assignment",
    fulltime : true,
    __proto__: TeachingSupport
}
TAAssistant.isAvailable