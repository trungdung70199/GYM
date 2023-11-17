/**
 * Viết hàm isPrimeNumber() nhận vào một số nguyên và kiểm tra xem đó có phải là số nguyên tố hay không
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isPrimeNumber(4)
 * 
 * Output:
 * false
 *  
 * */ 

function isPrimeNumber(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let result = isPrimeNumber(4);
console.log(result);
