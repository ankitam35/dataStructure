class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

let employeeObj = new Employee("Ankit", 25);
console.log(`My name is ${employeeObj.getName()} and age is ${employeeObj.getAge()}`);
