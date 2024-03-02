class Bike {
    constructor(company) {
        this.company = company;
    }
}

class Vehicle extends Bike {
    constructor(name, price) {
        super("Honda");
        this.name = name;
        this.price = price;
    }
}

var v = new Vehicle("Shine", "70000");
console.log(v.company + " " + v.name + " " + v.price);  