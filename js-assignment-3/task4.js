// ========== TASK 4: Movie List ==========

console.log("\n=== Task 4: Movie List ===");

// Create initial movie list
let movies = ["Inception", "The Dark Knight", "Interstellar", "Matrix", "Avatar"];

console.log("Initial Movie List:");
movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
});

// Add one movie
movies.push("Titanic");
console.log("\nAfter adding 'Titanic':");
console.log(movies);

// Remove last movie
const removedMovie = movies.pop();
console.log(`\nRemoved movie: ${removedMovie}`);
console.log("After removing last movie:");
console.log(movies);

// Print final list using different loops
console.log("\n=== Final Movie List ===");

// Method 1: Using for loop
console.log("Using for loop:");
for(let i = 0; i < movies.length; i++) {
    console.log(`${i + 1}. ${movies[i]}`);
}

// Method 2: Using forEach
console.log("\nUsing forEach:");
movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
});

// Method 3: Using for...of loop
console.log("\nUsing for...of loop:");
let counter = 1;
for(let movie of movies) {
    console.log(`${counter}. ${movie}`);
    counter++;
}

// Additional operations
console.log("\n=== Additional Array Operations ===");

// Add movie at beginning
movies.unshift("The Godfather");
console.log("After adding at beginning:", movies);

// Remove first movie
movies.shift();
console.log("After removing first movie:", movies);

// Find movie index
const searchMovie = "Matrix";
const index = movies.indexOf(searchMovie);
console.log(`"${searchMovie}" found at index: ${index}`);

// Check if array includes a movie
const checkMovie = "Avatar";
console.log(`Does list include "${checkMovie}"? ${movies.includes(checkMovie)}`);