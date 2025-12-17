// ========== TASK 2: Filter Even Numbers ==========

console.log("\n=== Task 2: Filter Even Numbers ===");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Method 1: Using filter() with arrow function
const evenNumbers1 = numbers.filter(num => num % 2 === 0);
console.log("Method 1 - Even numbers:", evenNumbers1);

// Method 2: Using filter() with regular function
const evenNumbers2 = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Method 2 - Even numbers:", evenNumbers2);

// Method 3: Complete example with explanation
console.log("\nOriginal array:", numbers);

const isEven = (number) => {
    return number % 2 === 0;
};

const filteredEven = numbers.filter(isEven);
console.log("Even numbers only:", filteredEven);
console.log("Count of even numbers:", filteredEven.length);

// Method 4: Also show odd numbers for comparison
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);