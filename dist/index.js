"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`);
    }
}
class ElectricCar extends Car {
    charge() {
        console.log(`${this.brand} is charging...`);
    }
}
const tesla = new ElectricCar("Tesla", 120);
tesla.move();
tesla.charge();
//# sourceMappingURL=index.js.map