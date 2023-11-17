/**
 * Viết hàm isLeapYear() nhận vào một số năm và kiếm tra xem đó có phải là năm nhuận hay không.
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isLeapYear(2016)
 * 
 * Output:
 * false
 *  */ 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let result = isLeapYear(2016);
console.log(result); 
