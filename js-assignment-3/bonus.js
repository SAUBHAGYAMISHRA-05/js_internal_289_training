// ========== BONUS CHALLENGES ==========

console.log("\n=== BONUS CHALLENGES ===");

// Task 6: Find Max Number Without Built-in Functions
console.log("\n=== Task 6: Find Max Number ===");

let arr = [10, 40, 25, 80, 15, 95, 60];

// Method 1: Using loop
function findMax(array) {
    if(array.length === 0) return null;
    
    let max = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log("Array:", arr);
console.log("Maximum number (custom function):", findMax(arr));

// Method 2: Also find min
function findMinMax(array) {
    if(array.length === 0) return {min: null, max: null};
    
    let min = array[0];
    let max = array[0];
    
    for(let num of array) {
        if(num < min) min = num;
        if(num > max) max = num;
    }
    
    return {min, max};
}

const result = findMinMax(arr);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);

// Method 3: Using reduce
const maxUsingReduce = arr.reduce((max, current) => {
    return current > max ? current : max;
}, arr[0]);

console.log("Maximum (using reduce):", maxUsingReduce);

// Task 7: Transform Names Using map()
console.log("\n=== Task 7: Transform Names ===");

let names = ["ram", "shyam", "mohan", "sita", "geeta"];

// Method 1: Using map() with arrow function
const uppercaseNames1 = names.map(name => name.toUpperCase());
console.log("Method 1 - Uppercase:", uppercaseNames1);

// Method 2: Using map() with regular function
const uppercaseNames2 = names.map(function(name) {
    return name.toUpperCase();
});
console.log("Method 2 - Uppercase:", uppercaseNames2);

// Method 3: Create formatted names
console.log("\nOriginal names:", names);

const formattedNames = names.map((name, index) => {
    return {
        id: index + 1,
        original: name,
        uppercase: name.toUpperCase(),
        capitalized: name.charAt(0).toUpperCase() + name.slice(1),
        length: name.length
    };
});

console.log("\nFormatted Names Details:");
formattedNames.forEach(name => {
    console.log(`ID: ${name.id} | Original: ${name.original} | Uppercase: ${name.uppercase} | Capitalized: ${name.capitalized} | Length: ${name.length}`);
});

// Method 4: Multiple transformations
const transformedNames = names
    .map(name => name.toUpperCase())
    .map(name => `Mr. ${name}`)
    .map(name => `${name} - Developer`);

console.log("\nMulti-step transformation:", transformedNames);