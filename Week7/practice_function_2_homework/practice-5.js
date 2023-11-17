// Day fibonacci

// Viet ham findFibo() nhan vao mot so n va tra ve chu so trong day Fibo thu n

// Vi du: findFibo(6) output 8

// in day fibonacci
// function findFibo(n) {
// 	let a = 0,
// 		b = 1,
// 		c;
// 	console.log(a);
// 	console.log(b);
// 	for (let i = 2; i < n; i++) {
// 		c = a + b;
// 		console.log(c);
// 		a = b;
// 		b = c;
// 	}
// }
// findFibo(10);

// arrow func
// const findFibo = n => {
//     let fiboArray = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
//     }
//     const result = fiboArray[n].toString();
//     console.log(`Chu so trong day fibonacci thu ${n} la: ${result}`);
//   };
//   findFibo(8);



function findFibo(n) {
    if (n==0 || n==1) {
        return n;
    } else {
        let f1 = 0, f2 = 1, f3;
        for (let i = 1; i < n; i++) {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }
        return f3;
    }
}
console.log(findFibo(7));