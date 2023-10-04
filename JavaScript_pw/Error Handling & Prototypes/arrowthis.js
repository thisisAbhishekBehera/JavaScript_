let obj = {
    x : 10,
    fun() {
        // console.log(this.x);
        y = {
            gun: () => {
                console.log(this.x);
            }
        }

        y.gun()
    }
}
//We can call a function defined outside an  arrow function
//here y.gun() function is defined outside arrow function so executed
obj.fun();