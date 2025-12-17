// ========== PART A: BASIC PROGRAMS ==========

console.log("=== PART A: BASIC PROGRAMS ===");

// 1. Sum of two numbers
console.log("\n1. Sum of two numbers:");
let num1 = 10, num2 = 20;
console.log(`Sum of ${num1} and ${num2} = ${num1 + num2}`);

// 2. Print "Hello <name>"
console.log("\n2. Hello message:");
let name = "John";
console.log(`Hello ${name}`);

// 3. Even/Odd check
console.log("\n3. Even/Odd check:");
let number = 7;
console.log(`${number} is ${number % 2 === 0 ? 'Even' : 'Odd'}`);

// 4. Celsius → Fahrenheit
console.log("\n4. Celsius to Fahrenheit:");
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// 5. Max among 3 numbers
console.log("\n5. Maximum among 3 numbers:");
let a = 12, b = 25, c = 8;
let max = Math.max(a, b, c);
console.log(`Maximum of ${a}, ${b}, ${c} is ${max}`);

// 6. Find string length
console.log("\n6. String length:");
let text = "JavaScript";
console.log(`Length of "${text}" is ${text.length}`);

// 7. Toggle boolean
console.log("\n7. Toggle boolean:");
let flag = true;
console.log(`Original: ${flag}, Toggled: ${!flag}`);

// 8. Concatenate strings
console.log("\n8. Concatenate strings:");
let str1 = "Hello", str2 = "World";
console.log(`Concatenated: ${str1 + " " + str2}`);

// 9. Positive/Negative/Zero
console.log("\n9. Positive/Negative/Zero check:");
let num = -5;
if(num > 0) {
    console.log(`${num} is Positive`);
} else if(num < 0) {
    console.log(`${num} is Negative`);
} else {
    console.log(`${num} is Zero`);
}

// 10. var / let / const example
console.log("\n10. var/let/const example:");
var oldVariable = "I can be redeclared";
let modernVariable = "I can be reassigned";
const constantVariable = "I cannot be changed";

console.log(`var: ${oldVariable}`);
console.log(`let: ${modernVariable}`);
console.log(`const: ${constantVariable}`);

// 11. Multiplication table
console.log("\n11. Multiplication table of 5:");
for(let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}

// 12. Sum of first 10 natural numbers
console.log("\n12. Sum of first 10 natural numbers:");
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum = ${sum}`);

// 13. Switch-case → day name
console.log("\n13. Day name using switch-case:");
let dayNumber = 3;
let dayName;
switch(dayNumber) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;
    case 7: dayName = "Sunday"; break;
    default: dayName = "Invalid day";
}
console.log(`Day ${dayNumber} is ${dayName}`);

// 14. Function → Factorial
console.log("\n14. Factorial using function:");
function factorial(n) {
    if(n === 0 || n === 1) return 1;
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(`Factorial of 5 = ${factorial(5)}`);

// 15. Function → Voting eligibility
console.log("\n15. Voting eligibility:");
function checkVotingEligibility(age) {
    return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
console.log(`Age 20: ${checkVotingEligibility(20)}`);
console.log(`Age 16: ${checkVotingEligibility(16)}`);