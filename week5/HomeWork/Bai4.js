let n = 12345;

let countDigit = 0;
let sumDigit = 0;
let reversedValue = 0;

while (n != 0) {
	sumDigit += n % 10;
	reversedValue = reversedValue * 10 + n % 10;
	n = parseInt(n / 10);
	countDigit++;
}

console.log(`So luong chu so cua n la: ${countDigit}`);
console.log(`Tong cac chu so cua n la: ${sumDigit}`);
console.log(`Chu so dao nguoc cua n la: ${reversedValue}`);
