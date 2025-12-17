// ========== TASK 5: User Profile JSON ==========

console.log("\n=== Task 5: User Profile JSON ===");

// Create user object
let user = {
    name: "Aman",
    age: 21,
    course: "JavaScript",
    email: "aman@example.com",
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Mumbai",
        country: "India"
    }
};

console.log("Original JavaScript Object:");
console.log(user);
console.log("Type:", typeof user);

// Convert object to JSON string
const userJSON = JSON.stringify(user);
console.log("\nConverted to JSON String:");
console.log(userJSON);
console.log("Type:", typeof userJSON);

// Store in variable
const storedJSON = userJSON;
console.log("\nStored JSON in variable:");
console.log(storedJSON);

// Convert back to JavaScript object
const parsedUser = JSON.parse(storedJSON);
console.log("\nConverted back to JavaScript Object:");
console.log(parsedUser);
console.log("Type:", typeof parsedUser);

// Accessing data from parsed object
console.log("\n=== Accessing Parsed Data ===");
console.log(`Name: ${parsedUser.name}`);
console.log(`Age: ${parsedUser.age}`);
console.log(`Course: ${parsedUser.course}`);
console.log(`Skills: ${parsedUser.skills.join(", ")}`);
console.log(`City: ${parsedUser.address.city}`);

// Complex example with array of users
console.log("\n=== Multiple Users Example ===");
let users = [
    {id: 1, name: "Aman", age: 21},
    {id: 2, name: "Rohan", age: 22},
    {id: 3, name: "Priya", age: 20}
];

console.log("Users array:", users);

// Convert array to JSON
const usersJSON = JSON.stringify(users);
console.log("\nUsers as JSON:", usersJSON);

// Parse back to array
const parsedUsers = JSON.parse(usersJSON);
console.log("\nParsed users array:");
parsedUsers.forEach(user => {
    console.log(`- ${user.name} (${user.age} years)`);
});