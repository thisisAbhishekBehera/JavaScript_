const Product = function (n,p,r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone" , 1245653, 4)
console.log(p);