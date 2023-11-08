function Rectangle(height, width) {
	for (let i = 0; i < height; i++) {
		let row = 'O'.repeat(width);
		console.log(row);
	}
}
Rectangle(20, 20);

// hcn
const height = 5;
const width = 8;

for (let i = 0; i < height; i++) {
	let row = '';
	for (let j = 0; j < width; j++) {
		row += 'O';
	}
	console.log(row);
}
