// function Tamgiac(n) {
//     for (let i = 1; i <= n; i++) {
//       let space = ' '.repeat(i - 1);
//       console.log(space + '-');
//     }
//   }

//   Tamgiac(5);

const n = parseInt(readLine());
const water = readLine();

for (let i = 0; i < n; i++) {
	console.log(''.repeat(i) + water);
}
