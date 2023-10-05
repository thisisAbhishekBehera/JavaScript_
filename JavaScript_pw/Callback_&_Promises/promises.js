function createPromise() {
    return new Promise(function exec(resolve, reject) {
        //your code goes here
        setTimeout(function f() {
            console.log("timer done");
            resolve("Done")
        }, 3000);
    });
}

console.log("Start");
let x = createPromise();
console.log("got a new promise");
x.then(function f (value) {
    console.log("Promise Done", value);
})
console.log("end");

// for(let i = 0; i< 1002000000; i++) {}