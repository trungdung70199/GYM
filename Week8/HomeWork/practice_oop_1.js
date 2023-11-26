/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */

class Rectangle {  
    constructor(height, width) {
        this.height = height;
        this.width = width;
    } 

    area() {
        console.log(`Area is: ${this.height * this.width}`);
    }

    Cvi() {
        console.log(`Chu vi: ${(this.height + this.width) * 2}`);
    }
}

const Rec1 = new Rectangle(3, 5);

Rec1.area();
Rec1.Cvi();