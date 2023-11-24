
class Car {
    constructor(carName, brandName, carColor) {
        this.carName = carName;
        this.brandName = brandName;
        this.color = carColor;
    }
    moveForward() {
        console.log("The car is moving forward");
    }

    introduce() {
        console.log(`Car Name: ${this.carName}`);
        console.log(`Brand Name: ${this.brandName}`);
        console.log(`Car Color: ${this.color}`);
        this.moveForward();
    }
}

const car1 = new Car("GTR", "Nissan", "black");
const car2 = new Car("Skyline", "Nissan", "White");

car1.introduce();
car2.introduce();
