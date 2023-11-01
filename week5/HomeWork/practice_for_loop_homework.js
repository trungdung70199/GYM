// // Bai 1
// function btnAction1() {
// 	var inputNumber = parseInt(document.getElementById('inputNumber1').value);
// 	var KQ = document.getElementById('demo');

// 	if (inputNumber < 0) {
// 		KQ.innerText = 'Khong nhap so am';
// 	} else {
// 		var sum = 0;

// 		for (var i = 0; i <= inputNumber1; i += 2) {
// 			sum += i;
// 		}

// 		KQ.innerText = `Tong cac so chan tu 0 den ${inputNumber1} la: ${sum}`;
// 	}
// }

// // Bai2

// let btnAction2 = document.getElementById('btn-action-2');
// btnAction2.addEventListener('click', () => {
// 	var inputNumber2 = parseInt(prompt('Nhap so nguyen n').value);
// 	if (inputNumber2 < 0) {
// 		alert('Khong nhap so am');
// 	} else {
// 		var lt = 1;
// 		for (var i = 1; i < inputNumber2; i++) {
// 			lt *= i;
// 		}
// 		alert(`Giai thua cua ${inputNumber2} la, ${lt}`);
// 	}
// });
