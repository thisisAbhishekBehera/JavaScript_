class ComplexNumber {
    #real;
    #imaginary
    constructor (r , i) {
        this.#real = r;
        this.#imaginary = i;
    }

    display() {
        console.log(this.#real, "+i" , this.#imaginary);
    }

    get real() {
        return this.#real
    }
    get imaginary() {
        return this.#imaginary
    }
    addComplexNumber(c) {
        this.#real += c.real;
        this.#imaginary += c.imaginary;
    }
}

const c1 = new ComplexNumber(2,3)
c1.display();
const c2 = new ComplexNumber(4,5)
c1.addComplexNumber(c2)
c1.display();