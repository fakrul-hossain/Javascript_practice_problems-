function add(num1, num2) {
    if (num1 !== 'number' || typeof num2 !== 'number') {
        console.log('please enter a number');
    }

    return num1 + num2;
}


const result = add(12, '45')
// console.log(result);

function multiply(num1, num2) {
    return num1 + num2;
}

const output = multiply(12,45)
console.log(output);