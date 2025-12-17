// ========== TASK 1: Student Marks Average ==========

console.log("=== Task 1: Student Marks Average ===");

let marks = [80, 90, 70, 85, 95];

// Method 1: Using reduce() with arrow function
const average1 = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
console.log(`Method 1 - Average Marks: ${average1}`);

// Method 2: Using reduce() with regular function
const average2 = marks.reduce(function(sum, mark) {
    return sum + mark;
}, 0) / marks.length;
console.log(`Method 2 - Average Marks: ${average2}`);

// Method 3: More detailed version
const totalMarks = marks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

const averageMarks = totalMarks / marks.length;
console.log(`Total Marks: ${totalMarks}`);
console.log(`Number of Subjects: ${marks.length}`);
console.log(`Final Average Marks: ${averageMarks}`);

// Method 4: With toFixed() for decimal precision
console.log(`Average Marks (2 decimals): ${averageMarks.toFixed(2)}`);