function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}