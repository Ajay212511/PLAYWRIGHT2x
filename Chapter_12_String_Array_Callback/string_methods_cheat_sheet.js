/**
 * ============================================================
 * JavaScript String Methods Cheat Sheet
 * Chapter 12: String, Array, and Callback Methods
 * ============================================================
 * 
 * This file contains one-liner examples for every built-in String method.
 * Run this file in Node.js or your browser console to see the outputs.
 */

// ======================== TABLE OF CONTENTS ========================
// 1. Length & Access
// 2. Case Conversion
// 3. Searching & Checking
// 4. Extracting & Slicing
// 5. Modifying & Replacing
// 6. Trimming & Padding
// 7. Splitting & Joining
// 8. Unicode & Conversion
// 9. Matching & Regex
// 10. Template Literals & Interpolation
// ===================================================================


// ===================================================================
// 1. LENGTH & ACCESS
// ===================================================================

// length        - Returns the number of characters in a string
console.log("Hello".length);                          // 5

// charAt(index) - Returns character at the specified index
console.log("Hello".charAt(1));                       // "e"

// charCodeAt(index) - Returns Unicode of character at index
console.log("Hello".charCodeAt(0));                   // 72

// at(index)     - Returns character at index (supports negatives, ES2022)
console.log("Hello".at(-1));                          // "o"

// [index]       - Bracket notation to access character
console.log("Hello"[1]);                              // "e"


// ===================================================================
// 2. CASE CONVERSION
// ===================================================================

// toLowerCase() - Converts string to lowercase
console.log("HELLO WORLD".toLowerCase());             // "hello world"

// toUpperCase() - Converts string to uppercase
console.log("hello world".toUpperCase());             // "HELLO WORLD"

// toLocaleLowerCase(locale) - Locale-aware lowercase
console.log("I".toLocaleLowerCase("tr"));               // "ı"

// toLocaleUpperCase(locale) - Locale-aware uppercase
console.log("i".toLocaleUpperCase("tr"));               // "İ"


// ===================================================================
// 3. SEARCHING & CHECKING
// ===================================================================

// indexOf(substring, fromIndex)      - First index of substring
console.log("banana".indexOf("a"));                   // 1

// lastIndexOf(substring, fromIndex)  - Last index of substring
console.log("banana".lastIndexOf("a"));               // 5

// includes(substring, fromIndex)     - Checks if substring exists
console.log("hello world".includes("world"));         // true

// startsWith(substring, fromIndex)   - Checks if string starts with
console.log("hello world".startsWith("hello"));       // true

// endsWith(substring, length)        - Checks if string ends with
console.log("hello world".endsWith("world"));         // true


// ===================================================================
// 4. EXTRACTING & SLICING
// ===================================================================

// slice(start, end)        - Extracts section of string
console.log("hello world".slice(0, 5));               // "hello"

// substring(start, end)    - Similar to slice (no negative indices)
console.log("hello world".substring(6, 11));          // "world"

// substr(start, length)    - Extracts from start for length chars (deprecated but still works)
console.log("hello world".substr(6, 5));              // "world"


// ===================================================================
// 5. MODIFYING & REPLACING
// ===================================================================

// replace(searchValue, replaceValue)       - Replaces first match
console.log("hello world".replace("world", "JS"));    // "hello JS"

// replaceAll(searchValue, replaceValue)      - Replaces all matches (ES2021)
console.log("banana".replaceAll("a", "o"));           // "bonono"

// repeat(count)            - Repeats string count times (ES2015)
console.log("ha".repeat(3));                          // "hahaha"

// concat(...strings)       - Joins two or more strings
console.log("Hello".concat(" ", "World"));            // "Hello World"


// ===================================================================
// 6. TRIMMING & PADDING
// ===================================================================

// trim()                   - Removes whitespace from both ends
console.log("  hello  ".trim());                       // "hello"

// trimStart() / trimLeft() - Removes whitespace from start (ES2019)
console.log("  hello  ".trimStart());                 // "hello  "

// trimEnd() / trimRight()  - Removes whitespace from end (ES2019)
console.log("  hello  ".trimEnd());                   // "  hello"

// padStart(targetLength, padString)   - Pads from start (ES2017)
console.log("42".padStart(5, "0"));                   // "00042"

// padEnd(targetLength, padString)     - Pads from end (ES2017)
console.log("42".padEnd(5, "0"));                     // "42000"


// ===================================================================
// 7. SPLITTING & JOINING
// ===================================================================

// split(separator, limit)  - Splits string into array
console.log("a,b,c".split(","));                      // ["a", "b", "c"]


// ===================================================================
// 8. UNICODE & CONVERSION
// ===================================================================

// codePointAt(index)       - Returns Unicode code point (ES2015)
console.log("𠮷".codePointAt(0));                      // 134071

// fromCharCode(...codes)   - Creates string from Unicode values (Static method)
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// fromCodePoint(...codes)  - Creates string from code points (ES2015, Static)
console.log(String.fromCodePoint(134071));             // "𠮷"

// normalize(form)          - Unicode normalization (ES2015)
console.log("é".normalize("NFD"));                    // "é"

// toString()               - Returns string representation
console.log((123).toString());                         // "123"

// valueOf()                - Returns primitive string value
console.log(new String("hello").valueOf());            // "hello"


// ===================================================================
// 9. MATCHING & REGEX
// ===================================================================

// match(regex)             - Matches string against regex
console.log("hello 123".match(/\d+/));                // ["123"]

// matchAll(regex)          - Returns iterator of all matches (ES2020)
const matches = "test1 test2".matchAll(/test(\d)/g);
console.log([...matches][0][0]);                       // "test1"

// search(regex)            - Returns index of first regex match
console.log("hello world".search(/world/));            // 6

// replace with callback      - Uses function for replacement
console.log("hello 123".replace(/\d+/, (n) => n * 2)); // "hello 246"


// ===================================================================
// 10. TEMPLATE LITERALS & INTERPOLATION
// ===================================================================

// Template literals (backticks)
const name = "Alice";
console.log(`Hello, ${name}!`);                        // "Hello, Alice!"

// Tagged templates
function tag(strings, ...values) {
  console.log(strings, values);
}
tag`Hello ${"World"}!`;                               // ["Hello ", "!"] ["World"]


// ===================================================================
// BONUS: SLICING & INDEXING QUICK REFERENCE
// ===================================================================

const s = "JavaScript";

// s[index]           - Character at index
console.log(s[0]);                                     // "J"

// s[s.length - 1]    - Last character
console.log(s[s.length - 1]);                        // "t"

// s.slice(-3)        - Last 3 characters
console.log(s.slice(-3));                              // "ipt"

// s.slice(0, 4)      - First 4 characters
console.log(s.slice(0, 4));                            // "Java"

// s.split('').reverse().join('')  - Reverse string
console.log(s.split('').reverse().join(''));           // "tpircSavaJ"


// ===================================================================
// STRING VS STRING OBJECT
// ===================================================================

// Primitive string
const str1 = "hello";
console.log(typeof str1);                              // "string"

// String object (not recommended)
const str2 = new String("hello");
console.log(typeof str2);                              // "object"

// Always use primitive strings for performance and consistency
