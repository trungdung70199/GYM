// Tao ban mo phong xe hoi

// Tao class

class Car {
    // mo ta thuoc tinh

    carName = "GTR";
    brandName = "Nissan";
    carColor = "Black";

    // Mo ta hanh dong or phuong thuc
    moveForward() {
        console.log("The car is moving forward");
    }
}

// tao va tuong tac voi cac doi tuong cua class Car
car1 = new Car();
console.log(car1.carName);
console.log(car1.brandName);
console.log(car1.carColor);
car1.moveForward();

// 
console.log("car2:");
car2 = new Car();
console.log(car2.carName);
console.log(car2.brandName);
console.log(car2.carColor);
car2.moveForward();