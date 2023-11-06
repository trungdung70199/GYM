// Khai bao mang
let nameList = [ 'Anne', 'Bella', 'Chris', 'David', 'Elena' ];
let ageList = [ 19, 20, 21, 22, 18 ];
let averageList = [ 6.5, 7.0, 7.5, 8.0, 8.5 ];
let genderList = [ false, false, true, true, false ];
let hobbyList = [ [], [ 'music', 'book' ], [ 'swim' ], [ 'movie' ], [] ];

document.write(`Name list of student: ${nameList}<br><br>`);
document.write(`Age list of student: ${ageList}<br><br>`);
document.write(`Kieu du lieu cua mang nameList: ${typeof nameList}`);

// truy van phan tu mang
document.write(`Phan tu thu ba trong nameList: ${nameList[2]}`);
// Thay the gia tri
document.write(`Mang ban dau: ${nameList}`);
nameList[2] = 'Cole';
document.write(`<br><br>`);
// document.write(``);
