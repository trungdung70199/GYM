function minArray(arr) {
	let arr1 = [ 3, 5, 1, 8, -3, 7, 8 ];
    let min = minArray(arr1)
	// let min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

console.log(min);
