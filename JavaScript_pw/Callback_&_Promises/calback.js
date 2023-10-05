function h (x , fn) {
  //  h=>.. higher order function
  //fn => call back
 console.log(x*x);
 fn()

}

h(10, function() {
    console.log('done with call back');
})
console.log("Start");
setTimeout(function f() {
    console.log("Timer Done");
} , 2000)
console.log("end");
for(let i = 0; i<100000; i++) {}