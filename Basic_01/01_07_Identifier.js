// ============================================================
// 01_07_Identifier.js
// JavaScript Identifier Rules - Complete Guide
// ============================================================

// What is an Identifier?
// An identifier is a name given to a variable, function, class, or label.
// Example: In 'var a = 10;', 'a' is an identifier.


// ============================================================
// RULE 1: Allowed Characters
// ============================================================
// Identifiers can contain:
//   - Letters (a-z, A-Z)
//   - Digits (0-9)
//   - Underscore (_)
//   - Dollar sign ($)

let name = "Ajay";           // Letters only
let userName = "test";       // Camel case (recommended)
let $price = 99;             // Starts with $
let _score = 100;            // Starts with _
let user2name = "ok";        // Contains digit in middle
let _ = "underscore";        // Only underscore
let $ = "dollar";            // Only dollar sign

console.log("Rule 1 - Allowed characters:");
console.log(name, userName, $price, _score, user2name, _, $);


// ============================================================
// RULE 2: Must NOT Start with a Digit
// ============================================================
// Identifiers cannot begin with a number (0-9).

// ❌ INVALID - Uncomment to see error:
// let 2name = "Ajay";       // SyntaxError: Invalid or unexpected token
// let 123 = 456;            // SyntaxError

// ✅ VALID alternatives:
let name2 = "Ajay";          // Digit at the end is fine
let num123 = 456;            // Digit at the end is fine
console.log("\nRule 2 - No digit at start:", name2, num123);


// ============================================================
// RULE 3: No Hyphens (-) Allowed
// ============================================================
// Hyphens are NOT allowed because JS treats them as minus operators.

// ❌ INVALID - Uncomment to see error:
// let my-name = "Ajay";     // SyntaxError
// let first-name = "John";  // SyntaxError

// ✅ VALID alternatives:
let myName = "Ajay";         // Use camelCase
let my_name = "Ajay";        // Use underscore
let firstName = "John";      // Use camelCase
console.log("\nRule 3 - No hyphens:", myName, my_name, firstName);


// ============================================================
// RULE 4: No Spaces Allowed
// ============================================================
// Identifiers cannot contain whitespace or spaces.

// ❌ INVALID - Uncomment to see error:
// let my name = "Ajay";     // SyntaxError
// let first name = "John";  // SyntaxError

// ✅ VALID alternatives:
let myName2 = "Ajay";        // Use camelCase
let my_name2 = "Ajay";       // Use snake_case
let firstName2 = "John";     // Use camelCase
console.log("\nRule 4 - No spaces:", myName2, my_name2, firstName2);


// ============================================================
// RULE 5: Case Sensitivity
// ============================================================
// JavaScript identifiers are case-sensitive.
// 'Name', 'name', and 'NAME' are three different identifiers.

let Name = "Uppercase N";
let name3 = "lowercase n";
let NAME = "All uppercase";

console.log("\nRule 5 - Case sensitivity:");
console.log(Name);           // Uppercase N
console.log(name3);          // lowercase n
console.log(NAME);           // All uppercase


// ============================================================
// RULE 6: Cannot Use Reserved Keywords
// ============================================================
// JavaScript reserved words cannot be used as identifiers.

// ❌ INVALID - Uncomment to see error:
// let class = "JS";         // SyntaxError
// let function = "test";    // SyntaxError
// let return = 5;           // SyntaxError
// let var = 10;             // SyntaxError
// let let = 20;             // SyntaxError (in strict mode)
// let const = 30;           // SyntaxError

// List of common reserved keywords to avoid:
// break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends,
// finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw,
// try, typeof, var, void, while, with, yield, let, static, await, async, enum, implements,
// interface, package, private, protected, public, abstract, boolean, byte, char, double, final,
// float, goto, int, long, native, short, synchronized, throws, transient, volatile, true, false, null

// ✅ VALID alternatives:
let className = "JS";        // Add suffix/prefix
let myFunction = "test";     // Add prefix
let returnValue = 5;         // Add suffix
let varName = 10;            // Add suffix
console.log("\nRule 6 - No reserved keywords:", className, myFunction, returnValue, varName);


// ============================================================
// RULE 7: No Special Characters Except _ and $
// ============================================================
// Special characters like @, #, %, &, *, etc. are NOT allowed.

// ❌ INVALID - Uncomment to see error:
// let user@name = "Ajay";   // SyntaxError
// let price# = 100;         // SyntaxError
// let my%var = 50;          // SyntaxError
// let total&sum = 200;      // SyntaxError

// ✅ VALID alternatives:
let userName3 = "Ajay";
let priceUSD = 100;
let myVar = 50;
let totalSum = 200;
console.log("\nRule 7 - No special chars:", userName3, priceUSD, myVar, totalSum);


// ============================================================
// RULE 8: Unicode Letters Are Allowed (but avoid for simplicity)
// ============================================================
// ES5+ allows Unicode letters, but best practice is to stick to ASCII.

let \u0041 = "Unicode A";    // \u0041 is 'A'
// let \u03B1 = "alpha";     // Greek letter alpha (valid but confusing)
console.log("\nRule 8 - Unicode:", A); // prints "Unicode A"


// ============================================================
// BEST PRACTICES FOR NAMING IDENTIFIERS
// ============================================================

// 1. Use camelCase for variables and functions
let firstName4 = "Ajay";
let lastName = "Jaiswal";
let getUserName = function() { return firstName4; };

// 2. Use PascalCase for class names (constructor functions)
// function UserAccount() { }

// 3. Use UPPER_SNAKE_CASE for constants
const MAX_USERS = 100;
const PI_VALUE = 3.14159;

// 4. Use descriptive and meaningful names
let n = "bad";               // Not clear
let userEmail = "good";      // Clear and meaningful

// 5. Avoid single-letter names (except for loops: i, j, k)
for (let i = 0; i < 3; i++) {
    console.log("Loop index:", i);
}

// 6. Avoid starting with underscore or dollar unless convention
//    $ is often used for jQuery or DOM selectors
//    _ is often used for private variables or lodash

console.log("\nBest Practices:");
console.log(firstName4, lastName, getUserName());
console.log("Constants:", MAX_USERS, PI_VALUE);


// ============================================================
// SUMMARY: VALID vs INVALID IDENTIFIERS
// ============================================================

// ✅ VALID IDENTIFIERS:
// name, Name, NAME, $name, _name, name1, name_1, $, _, userName, user_name

// ❌ INVALID IDENTIFIERS:
// 1name       (starts with digit)
// my-name     (contains hyphen)
// my name     (contains space)
// class       (reserved keyword)
// user@name   (contains special char @)
// my%var      (contains special char %)


// ============================================================
// QUICK REFERENCE TABLE
// ============================================================
// | Example     | Valid? | Reason                         |
// |-------------|--------|--------------------------------|
// | name        | Yes    | Letters only                   |
// | $price      | Yes    | Starts with $                  |
// | _score      | Yes    | Starts with _                  |
// | user2       | Yes    | Ends with digit                |
// | 2user       | No     | Starts with digit              |
// | my-name     | No     | Contains hyphen                |
// | my name     | No     | Contains space                 |
// | class       | No     | Reserved keyword               |
// | user@name   | No     | Contains special character     |
// | returnValue | Yes    | Letters only, descriptive      |
// ============================================================

console.log("\n=== Identifier Rules Complete ===");
