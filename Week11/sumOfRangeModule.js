function range(start, end, step=(start <= end)? 1: -1) {
	let array = [];
	
	if (step > 0) {

		if (start > end) {
			return undefined;
		}

		for (let n = start; n <= end; n += step) {
			array.push(n);
		}
	}
	else if (step < 0) {

		if (start < end) {
			return undefined;
		}

		for (let n = start; n >= end; n += step) {
			array.push(n);
		}
	}

	else {
		return undefined;
	}
	
	return array;
}


function sum(array) {
    let result = 0;

    for (num of array) {
        result += num;
    }

    return result;
}