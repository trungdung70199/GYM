        /**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 200cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {

    constructor(chuXe, loaiXe, dtich, gia) {
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.dtich = dtich;
        this.gia = gia;
    }

    calculateTax() {
        let taxValue = 0;
        if (this.dtich < 100) {
             taxValue = 0.01 * this.gia;
        } else if (this.dtich > 200) {
             taxValue =  0.05 * this.gia;
        } else {
            taxValue = 0.03 * this.gia;
        }
    }

    showInfo() {
        const tax = this.calculateTax;
        console.log(`
        chuXe: ${this.chuXe}
        loaiXe: ${this.loaiXe}
        dtich: ${this.dtich} cc
        gia: ${this.gia} USD
        Tax: ${tax} USD
        `); 
    }
}

const Vehicle1 = new Vehicle('Kitty', 'Motorcycle', 50, 10000);
const Vehicle2 = new Vehicle('Nguyen', 'Truck', 120, 30000);
const Vehicle3 = new Vehicle('Dung', 'Car', 300, 50000);

Vehicle1.showInfo();
Vehicle2.showInfo();
Vehicle3.showInfo();