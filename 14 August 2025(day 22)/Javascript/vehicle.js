<<<<<<< HEAD
// Parent class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Subclass extending Vehicle
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year); // Call parent constructor
        this.numDoors = numDoors;
    }

    getInfo() {
        // Override to include numDoors
        return `${super.getInfo()} - ${this.numDoors} doors`;
    }
}
const myVehicle = new Vehicle("Honda", "Civic", 2019);
console.log(myVehicle.getInfo());

const myCar = new Car("Toyota", "Camry", 2022, 4);
console.log(myCar.getInfo());
=======
// Parent class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Subclass extending Vehicle
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year); // Call parent constructor
        this.numDoors = numDoors;
    }

    getInfo() {
        // Override to include numDoors
        return `${super.getInfo()} - ${this.numDoors} doors`;
    }
}
const myVehicle = new Vehicle("Honda", "Civic", 2019);
console.log(myVehicle.getInfo());

const myCar = new Car("Toyota", "Camry", 2022, 4);
console.log(myCar.getInfo());
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
