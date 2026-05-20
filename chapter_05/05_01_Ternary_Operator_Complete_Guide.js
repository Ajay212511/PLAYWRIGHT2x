/**
 * ============================================================
 * TERNARY OPERATOR - COMPLETE LEARNING GUIDE
 * ============================================================
 * Syntax: condition ? expressionIfTrue : expressionIfFalse
 * 
 * The ternary operator is a shorthand for if-else.
 * Best used for SIMPLE, SINGLE decisions.
 * ============================================================
 */

console.log("=== 1. BASIC SYNTAX ===");
// Instead of:
let age = 20;
let message;
if (age >= 18) {
    message = "Adult";
} else {
    message = "Minor";
}
console.log(message); // Adult

// Use ternary:
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg); // Adult


console.log("\n=== 2. ASSIGNING VALUES BASED ON CONDITIONS ===");
let isLoggedIn = true;
let username = isLoggedIn ? "Ajay212511" : "Guest";
console.log(username); // Ajay212511

let stock = 0;
let availability = stock > 0 ? "In Stock" : "Out of Stock";
console.log(availability); // Out of Stock


console.log("\n=== 3. PERFORMING DIFFERENT ACTIONS (function calls) ===");
function saveData() { console.log("Data saved!"); }
function showError() { console.log("Error occurred!"); }

let success = true;
success ? saveData() : showError(); // Data saved!


console.log("\n=== 4. RETURNING FROM FUNCTIONS ===");
function getDiscount(price, isMember) {
    return isMember ? price * 0.8 : price;
}
console.log(getDiscount(100, true));  // 80
console.log(getDiscount(100, false)); // 100

function grade(score) {
    return score >= 90 ? "A" :
           score >= 80 ? "B" :
           score >= 70 ? "C" :
           score >= 60 ? "D" : "F";
}
console.log(grade(85)); // B
console.log(grade(45)); // F


console.log("\n=== 5. NESTED TERNARY (Multiple Conditions) ===");
// Finding the greatest of 3 numbers
let a = 45, b = 72, c = 18;
let greatest = (a > b)
    ? (a > c ? a : c)
    : (b > c ? b : c);
console.log("Greatest:", greatest); // 72

// Cleaner nested: BMI Category
let weight = 75; // kg
let height = 1.57; // meters
let bmi = weight / (height * height);
let category = bmi < 18.5 ? "Underweight" :
               bmi < 25   ? "Normal" :
               bmi < 30   ? "Overweight" : "Obese";
console.log(`BMI: ${bmi.toFixed(1)} -> ${category}`);


console.log("\n=== 6. API STATUS CODE HANDLING (Real World) ===");
let statusCode = 404;
let statusText = statusCode >= 200 && statusCode < 300 ? "Success" :
                 statusCode >= 300 && statusCode < 400 ? "Redirection" :
                 statusCode >= 400 && statusCode < 500 ? "Client Error" :
                 statusCode >= 500                     ? "Server Error" : "Unknown";
console.log(`${statusCode}: ${statusText}`); // 404: Client Error


console.log("\n=== 7. DEFAULT VALUES (null / undefined handling) ===");
let userInput = null;
let displayName = userInput ? userInput : "Anonymous";
console.log(displayName); // Anonymous

// Modern alternative: Nullish Coalescing ??
let displayName2 = userInput ?? "Anonymous";
console.log(displayName2); // Anonymous


console.log("\n=== 8. OBJECT PROPERTY SELECTION ===");
let theme = "dark";
let colors = theme === "dark"
    ? { bg: "#000", text: "#fff", accent: "#0af" }
    : { bg: "#fff", text: "#000", accent: "#f50" };
console.log(colors);


console.log("\n=== 9. ARRAY METHODS WITH TERNARY ===");
let numbers = [1, 2, 3, 4, 5, 6];
let processed = numbers.map(n => n % 2 === 0 ? n * 2 : n);
console.log(processed); // [1, 4, 3, 8, 5, 12]

let filtered = numbers.filter(n => n > 3 ? true : false);
console.log(filtered); // [4, 5, 6]


console.log("\n=== 10. REACT/JSX STYLE PATTERNS (Common in Frontend) ===");
// Simulating JSX conditional rendering
let isLoading = false;
let hasError = true;

let component = isLoading ? "LoadingSpinner"
              : hasError  ? "ErrorMessage"
              :             "DataTable";
console.log("Render:", component); // ErrorMessage

let items = ["Apple", "Banana"];
let listContent = items.length > 0
    ? items.map(i => `- ${i}`).join("\n")
    : "No items found";
console.log(listContent);


console.log("\n=== 11. TEMPLATE LITERALS WITH TERNARY ===");
let temp = 32;
let weatherMsg = `Today is ${temp > 30 ? "hot" : temp > 20 ? "warm" : "cold"}.`;
console.log(weatherMsg);


console.log("\n=== 12. TRUTHY / FALSY GOTCHAS ===");
let count = 0;
// BAD: 0 is falsy, so this gives "No items" even though count is explicitly 0
let badMsg = count ? `${count} items` : "No items";
console.log(badMsg); // No items (WRONG!)

// GOOD: Check explicitly for null/undefined, or use >
let goodMsg = count > 0 ? `${count} items` : "No items";
console.log(goodMsg); // No items (correct)

// Or for any number including 0:
let exactMsg = count !== null ? `${count} items` : "Unknown";
console.log(exactMsg); // 0 items


console.log("\n=== 13. TERNARY WITH LOGICAL OPERATORS ===");
let role = "admin";
let canDelete = role === "admin" || role === "moderator" ? true : false;
console.log(canDelete); // true

// Shorter equivalent:
let canDelete2 = role === "admin" || role === "moderator";
console.log(canDelete2); // true


console.log("\n=== 14. TERNARY VS IF-ELSE: WHEN TO USE WHAT ===");
// ✅ USE TERNARY for simple value assignment
let isActive = true;
let btnClass = isActive ? "btn-active" : "btn-inactive";

// ❌ DON'T USE TERNARY for complex logic (hard to read)
// BAD:
// let result = a > b ? (c > d ? (e > f ? x : y) : z) : w;

// ✅ USE IF-ELSE for multiple statements or complex logic
// if (a > b) {
//     doSomething();
//     doAnotherThing();
// } else {
//     handleError();
// }


console.log("\n=== 15. QUICK PRACTICE EXAMPLES ===");
// Even or Odd
let num = 7;
console.log(`${num} is ${num % 2 === 0 ? "Even" : "Odd"}`);

// Positive / Negative / Zero
let val = -5;
let sign = val > 0 ? "Positive" : val < 0 ? "Negative" : "Zero";
console.log(`${val} is ${sign}`);

// Leap Year
let year = 2024;
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`${year} is ${isLeap ? "a Leap Year" : "not a Leap Year"}`);

// Voting Eligibility
let voterAge = 16;
console.log(voterAge >= 18 ? "Eligible to vote" : `Wait ${18 - voterAge} more years`);

// Password Strength
let password = "Hello1";
let strength = password.length >= 8 ? "Strong" : password.length >= 5 ? "Medium" : "Weak";
console.log(`Password strength: ${strength}`);

// Day Type
let day = "Sunday";
let dayType = day === "Saturday" || day === "Sunday" ? "Weekend" : "Weekday";
console.log(`${day} is a ${dayType}`);


console.log("\n=== 16. ADVANCED: TERNARY IN OBJECT/CONFIG BUILDING ===");
let env = "production";
let config = {
    apiUrl: env === "production"
        ? "https://api.example.com"
        : "http://localhost:3000",
    debug: env === "development" ? true : false,
    timeout: env === "production" ? 5000 : 10000
};
console.log(config);


console.log("\n=== 17. ADVANCED: CHAINING WITH OPTIONAL VALUES ===");
let user = { profile: { name: "Ajay" } };
let userName = user && user.profile && user.profile.name
    ? user.profile.name
    : "Unknown";
console.log(userName); // Ajay

// Modern: Optional chaining + nullish coalescing (better than deep ternary)
let userName2 = user?.profile?.name ?? "Unknown";
console.log(userName2); // Ajay
