function createPromise() {
    return new Promise(function exec(resolve, reject) {
        //your code goes here
        setTimeout(function f() {
            console.log("timer done");
            resolve(10)
        }, 3000);
    });
}


async function consume() {
    console.log("Inside function");
    const response = await createPromise();
    console.log("response is " , response);
}
console.log("Start");
consume();
console.log("End");