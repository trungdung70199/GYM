let nameList = [ 'Anne', 'Bella', 'Chris', 'Dan' ];

document.write('Danh sach phan tu trong nameList: <br>');

// for loop
// for (let i = 0; i < nameList.length; i++) {
// 	document.write(`${nameList[i]} <br>`);
// }

// for in
for (let i in nameList) {
	document.write(`${nameList[i]} <br>`);
}
