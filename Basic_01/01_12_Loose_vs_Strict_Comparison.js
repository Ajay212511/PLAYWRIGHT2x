/**
 * LOOSE (==) vs STRICT (===) COMPARISON OPERATORS IN JAVASCRIPT
 * 
 * Loose Equality (==): Compares VALUES only. Performs TYPE COERCION before comparing.
 * Strict Equality (===): Compares VALUES AND TYPES. No type coercion.
 * 
 * Golden Rule: Always use === and !== unless you explicitly need type coercion.
 */

// ==========================================
// BASIC DIFFERENCE
// ==========================================

console.log("=== BASIC DIFFERENCE ===");

console.log(5 == "5");   // true  -> string "5" is coerced to number 5
console.log(5 === "5");  // false -> different types (number vs string)

console.log(1 == true);  // true  -> true is coerced to number 1
console.log(1 === true); // false -> different types (number vs boolean)


// ==========================================
// CONFUSING / TRICKY EXAMPLES
// ==========================================

console.log("\n=== CONFUSING EXAMPLES ===");

// 1. Empty string vs zero
console.log(0 == "");    // true  -> both coerce to falsy 0
console.log(0 === "");   // false -> number vs string

// 2. Empty string vs false
console.log(false == ""); // true  -> both coerce to 0
console.log(false === ""); // false -> boolean vs string

// 3. Null vs undefined (THE ONLY USEFUL CASE FOR ==)
console.log(null == undefined);  // true  -> special rule in JS
console.log(null === undefined); // false -> different types

// 4. Null vs zero / empty string
console.log(null == 0);   // false  -> null does NOT coerce to 0 with ==
console.log(null == "");  // false  -> null only equals undefined with ==
console.log(undefined == 0); // false

// 5. NaN is NEVER equal to anything, even itself
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
// Use Number.isNaN() instead
console.log(Number.isNaN(NaN)); // true

// 6. Arrays and objects (reference types)
console.log([] == "");     // true  -> empty array coerces to empty string
console.log([] === "");    // false -> object vs string

console.log([1,2] == "1,2");  // true  -> array coerces to "1,2"
console.log([1,2] === "1,2"); // false -> object vs string

// 7. Objects with valueOf / toString
console.log({} == "[object Object]");  // true
console.log({} === "[object Object]"); // false

// 8. Boolean traps
console.log(true == "1");   // true  -> "1" coerces to number 1, true coerces to 1
console.log(true == "0");   // false -> "0" coerces to 0, true is 1
console.log(true == 2);     // false -> true is 1, 1 != 2
console.log(false == "0");  // true  -> both coerce to 0

// 9. Double negation confusion
console.log(![]);           // false  -> empty array is truthy, negated
console.log([] == ![]);     // true   -> ![] is false, [] coerces to "", "" == false -> true
console.log([] === ![]);    // false  -> object vs boolean

// 10. Transitivity is BROKEN with ==
console.log("0" == 0);      // true
console.log(0 == "");       // true
console.log("0" == "");     // false  -> TRANSITIVITY BROKEN!

// 11. More broken transitivity
console.log(false == 0);    // true
console.log(0 == "0");      // true
console.log(false == "0");  // true
console.log(false == "false"); // false -> "false" string does NOT coerce to boolean false

// 12. Negative zero
console.log(0 == -0);       // true
console.log(0 === -0);      // true
console.log(Object.is(0, -0)); // false  -> Object.is can tell them apart

// 13. String boolean
console.log("true" == true);  // false -> "true" coerces to NaN, true is 1
console.log("1" == true);     // true  -> "1" coerces to 1

// 14. Number vs empty array
console.log(0 == []);       // true  -> [] coerces to "", then to 0
console.log(0 === []);      // false -> number vs object

// 15. Multiple arrays
console.log([] == []);      // false -> different object references
console.log([] === []);     // false -> different object references
console.log([1] == [1]);    // false -> different object references

// 16. String number with decimals
console.log(1.0 == "1");    // true
console.log(1.0 === "1");   // false

// 17. Infinity comparisons
console.log(Infinity == Infinity);  // true
console.log(Infinity === Infinity); // true
console.log(-Infinity == Infinity); // false


// ==========================================
// QUICK REFERENCE TABLE
// ==========================================

console.log("\n=== QUICK REFERENCE ===");

const examples = [
    ["5 == '5'", 5 == "5"],
    ["5 === '5'", 5 === "5"],
    ["0 == ''", 0 == ""],
    ["0 === ''", 0 === ""],
    ["null == undefined", null == undefined],
    ["null === undefined", null === undefined],
    ["NaN == NaN", NaN == NaN],
    ["[] == ''", [] == ""],
    ["[] == []", [] == []],
    ["true == '1'", true == "1"],
    ["true == 'true'", true == "true"],
    ["'0' == 0", "0" == 0],
    ["false == '0'", false == "0"],
];

console.log("Expression          | Result");
console.log("--------------------|-------");
examples.forEach(([expr, result]) => {
    console.log(`${expr.padEnd(20)}| ${result}`);
});


// ==========================================
// BEST PRACTICE
// ==========================================

console.log("\n=== BEST PRACTICE ===");
console.log("Always use === (strict equality) and !== (strict inequality)");
console.log("Only exception: checking for null OR undefined at once:");
console.log("  if (value == null) // catches BOTH null and undefined");
console.log("  if (value === null || value === undefined) // equivalent, more explicit");
