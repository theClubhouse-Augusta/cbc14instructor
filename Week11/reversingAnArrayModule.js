function reverseArray(array) {
	let reversedArray = [];

	for (let element of array) {
		reversedArray.unshift(element);
	}

	return reversedArray;
}


function reverseArrayInPlace(array) {
	for (let index = 0; index < array.length; index++) {
		let lastValue = array.pop();
		array.splice(index, 0, lastValue);
	}
}

function reverseArrayInPlace(array) {
	const lastIndex = array.length - 1;
	
	for (let index = 0; index < Math.floor(array.length / 2); index++) {
		let firstValue = array[index];
		array[index] = array[lastIndex - index];
		array[lastIndex - index] = firstValue;
	}
}