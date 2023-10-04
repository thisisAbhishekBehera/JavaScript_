class Product {
    //property
    // name;
    // price;
    // ratings;
       #ratings;   //to make it private we use #
    //Constructor defined by user
    constructor(n, p , r) {
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.#ratings = r;
        // return 10;  =>>>> if u are returning a primitive then it will be avoided in consructor

        // return {x:0, y : 20}  //=>> if u return a non-primitive then it will be returned
    }

    static custom() {
        console.log("Calling a static method");
    }

    //Getter & Setter method
      get RatingGetter() {
        console.log(this.#ratings);
      }

      set RatingSetter(r) {
          if(r < 0) return;
          this.#ratings = r;
      }
    //behaviour
    display() {
        console.log("1st" ,this);
        console.log("Displaying the current product", this.name, this.#ratings);
    }
}

const p = new Product("Iphone" , 150000, 5)   //new => Creates an empty plain object
//in the above piece of code we are calling the constructor method
console.log(p);
p.display()
// Product.custom()
p.RatingSetter = 1;
p.RatingGetter