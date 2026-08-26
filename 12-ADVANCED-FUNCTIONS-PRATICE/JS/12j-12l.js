const multiply = (a, b) => {return a * b}

console.log(multiply(2, 3));
console.log(multiply(7, 10));

function countPositive(nums) {
    let positiveNumbers = 0;
    nums.forEach((num) => {
        if(num > 0) {
            positiveNumbers++;
        }
    });

    return positiveNumbers;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]))