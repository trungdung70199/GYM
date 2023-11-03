let n = 9;
let i = 2;

// Gia dinh n la SNT
let check = true;

while (i <= n - 1) {
	if (n % i == 0) {
		console.log(`${n} khong phai la SNT`);
		check = false;
	}
	i++;
}

if (check = true) {
	console.log(`${n} la SNT`);
}
