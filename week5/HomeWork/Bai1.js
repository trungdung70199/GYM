//Viết chương trình in ra tất cả các số chia hết cho 5 và 7 trong khoảng từ 1500 đến 2700

for (let i = 1500; i <= 2700; i++) {
	if (i % 5 == 0 && i % 7 == 0) {
		console.log(i);
	}
}
