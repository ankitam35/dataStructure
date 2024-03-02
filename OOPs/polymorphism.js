class A {
    getData() {
        return "Class A getData has been called"
    }
}

class B extends A {
    getData() {
        return "Class B getData has been called"
    }
}

let AObj = new A()
let BObj = new B()

console.log(AObj.getData(), "|", BObj.getData())