class Employee {
    constructor() {
        let name;
        let age;
    }

    setName(name) {
        this.name = name
    }

    setAge(age) {
        this.age = age
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

let employeeObj = new Employee();
employeeObj.setName("Ankit")
employeeObj.setAge(25)
console.log(`My name is ${employeeObj.getName()} and age is ${employeeObj.getAge()}`);
