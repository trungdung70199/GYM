let titleElement = document.getElementById("title");
// In ra toan bo tag h1
console.log(titleElement);
// Co the nhin thay noi dung ben trong the h1 thong qua innerHMTL
console.log(titleElement.innerHTML);
// Co the thay doi noi dung hien thi tren tag h1
// idea: Khi bam login thi noi dung ban dau co the thay doi
titleElement.innerHTML = "Average Mark Calculation";
// Thay doi mau sac size chu font,... cho the h1
titleElement.style.color = "red";
// Them element vao Student-list
// Tao the li moi
let newItemElement = document.createElement("li")

// Setup noi dung cho element
newItemElement.innerHTML = "3. John - 9 - 8 - 8.5";
// Them phan tu moi vao the ul
let StudentListElement = document.getElementById("Student-list");
StudentListElement.appendChild(newItemElement);
// Xoa form element ra khoi trang web
let studentForm = document.getElementById("student-form");
studentForm.remove();

