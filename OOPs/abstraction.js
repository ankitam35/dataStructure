class Shape {
    constructor(color) {
        this.color = color;
    }

    // Abstract method (to be implemented by subclasses)
    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented");
    }

    // Concrete method
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // Implementing the abstract method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    // Implementing the abstract method
    calculateArea() {
        return this.sideLength * this.sideLength;
    }
}

// Usage
const redCircle = new Circle('red', 5);
const blueSquare = new Square('blue', 4);

console.log(redCircle.getColor());         // Output: red
console.log(redCircle.calculateArea());     // Output: ~78.54

console.log(blueSquare.getColor());         // Output: blue
console.log(blueSquare.calculateArea());    // Output: 16
