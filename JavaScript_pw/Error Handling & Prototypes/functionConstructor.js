function Product(n,p,r) {
      this.name = n;
      this.Product = p;
      this.ratings = r;
}

const p = new Product("MacBook" , 151656, 6)
console.log(p);

let x = {
    p : Product    //p is referring to Product Function
}

x.p("airpods" , 20000, 5)
console.log(x);
/*
1.this keyword in js is diff than other languages
2.this keyword refers to the context from where we called

in the function constructor also
->if you return primitive it is ignored and we return the object referred by this
-> if you return a custom object then the custom object is returned
-> if you dont retur anything , then object referred by this is returned
*/