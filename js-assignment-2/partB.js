// ========== PART B: MODERATE PROGRAMS ==========

console.log("\n\n=== PART B: MODERATE PROGRAMS ===");

// 16. Prime number check
console.log("\n16. Prime number check:");
function isPrime(num) {
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(`7 is prime? ${isPrime(7)}`);
console.log(`10 is prime? ${isPrime(10)}`);
console.log(`13 is prime? ${isPrime(13)}`);

// 17. Sum of digits
console.log("\n17. Sum of digits:");
function sumOfDigits(num) {
    let sum = 0;
    let temp = num;
    
    while(temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return sum;
}

console.log(`Sum of digits of 123 = ${sumOfDigits(123)}`);
console.log(`Sum of digits of 4567 = ${sumOfDigits(4567)}`);

// 18. Reverse string without reverse()
console.log("\n18. Reverse string:");
function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(`Reverse of "hello" = "${reverseString("hello")}"`);
console.log(`Reverse of "JavaScript" = "${reverseString("JavaScript")}"`);

// 19. Grade calculation
console.log("\n19. Grade calculation:");
function calculateGrade(marks) {
    if(marks >= 90) return "A";
    else if(marks >= 75) return "B";
    else if(marks >= 50) return "C";
    else return "Fail";
}

console.log(`Marks 95: Grade ${calculateGrade(95)}`);
console.log(`Marks 80: Grade ${calculateGrade(80)}`);
console.log(`Marks 60: Grade ${calculateGrade(60)}`);
console.log(`Marks 40: Grade ${calculateGrade(40)}`);

// 20. Calculator function
console.log("\n20. Calculator function:");
function calculator(num1, num2, operator) {
    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}

console.log(`10 + 5 = ${calculator(10, 5, '+')}`);
console.log(`10 - 5 = ${calculator(10, 5, '-')}`);
console.log(`10 * 5 = ${calculator(10, 5, '*')}`);
console.log(`10 / 5 = ${calculator(10, 5, '/')}`);
console.log(`10 / 0 = ${calculator(10, 0, '/')}`);

// 21. Count vowels
console.log("\n21. Count vowels in string:");
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(`Vowels in "hello" = ${countVowels("hello")}`);
console.log(`Vowels in "JavaScript" = ${countVowels("JavaScript")}`);

// 22. Fibonacci series
console.log("\n22. Fibonacci series up to n terms:");
function fibonacciSeries(n) {
    let series = [];
    if(n >= 1) series.push(0);
    if(n >= 2) series.push(1);
    
    for(let i = 2; i < n; i++) {
        series.push(series[i-1] + series[i-2]);
    }
    return series;
}

console.log(`Fibonacci (7 terms): ${fibonacciSeries(7).join(", ")}`);
console.log(`Fibonacci (10 terms): ${fibonacciSeries(10).join(", ")}`);

// 23. Find min and max from array
console.log("\n23. Min and Max from array:");
function findMinMax(arr) {
    if(arr.length === 0) return {min: null, max: null};
    
    let min = arr[0];
    let max = arr[0];
    
    for(let num of arr) {
        if(num < min) min = num;
        if(num > max) max = num;
    }
    
    return {min, max};
}

const numbers = [3, 7, 1, 9, 4, 2, 6];
const result = findMinMax(numbers);
console.log(`Array: [${numbers.join(", ")}]`);
console.log(`Min: ${result.min}, Max: ${result.max}`);

// 24. Simple Menu Program
console.log("\n24. Simple Menu Program:");
function menuProgram(choice, num1, num2) {
    switch(choice) {
        case 1:
            return `${num1} + ${num2} = ${num1 + num2}`;
        case 2:
            return `${num1} - ${num2} = ${num1 - num2}`;
        case 3:
            return `${num1} × ${num2} = ${num1 * num2}`;
        case 4:
            if(num2 === 0) return "Error: Division by zero";
            return `${num1} ÷ ${num2} = ${num1 / num2}`;
        default:
            return "Invalid choice";
    }
}

console.log("Menu: 1.Add 2.Sub 3.Mul 4.Div");
console.log(menuProgram(1, 10, 5));
console.log(menuProgram(2, 10, 5));
console.log(menuProgram(3, 10, 5));
console.log(menuProgram(4, 10, 5));

// 25. Armstrong number check
console.log("\n25. Armstrong number check:");
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    
    while(temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}

console.log(`153 is Armstrong? ${isArmstrong(153)}`);  // 1³ + 5³ + 3³ = 153
console.log(`371 is Armstrong? ${isArmstrong(371)}`);  // 3³ + 7³ + 1³ = 371
console.log(`123 is Armstrong? ${isArmstrong(123)}`);  // Not Armstrong