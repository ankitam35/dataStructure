function Bike(name) {
    this.companyName = name;
}

Bike.prototype.getCompanyName = function () {
    return this.companyName;
}

function Vehicle(name, cc) {
    this.vehicleName = name;
    this.cc = cc;
}

let bikeObj = new Bike("Honda")

Vehicle.prototype = Object.assign(bikeObj)

let vehicleObj = new Vehicle("Shine", 120)

console.log(`This is ${vehicleObj.getCompanyName()} ${vehicleObj.vehicleName} and CC is ${vehicleObj.cc}`)

