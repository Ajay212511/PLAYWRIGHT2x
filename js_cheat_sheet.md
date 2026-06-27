# JavaScript Cheat Sheet

A quick reference for all concepts covered in this repo — from fundamentals to TypeScript.

---

## Variables

```js
var name = "Ajay";       // function-scoped, hoisted
let age = 30;            // block-scoped, can reassign
const PI = 3.14;         // block-scoped, can't reassign
```

## Data Types

```js
// Primitive
let str = "hello";       // string
let num = 42;            // number
let bool = true;         // boolean
let n = null;            // null (intentional empty)
let u = undefined;       // undefined (uninitialized)

// Reference
let arr = [1, 2, 3];     // object (array)
let obj = { key: "value" }; // object
```

## Comments

```js
// Single-line comment
/* Multi-line comment */
```

## Operators

```js
// Arithmetic
+  -  *  /  %  **  ++  --

// Assignment
=  +=  -=  *=  /=  %=

// Comparison
==  ===  !=  !==  >  <  >=  <=

// Logical
&&  ||  !

// Ternary
let status = age >= 18 ? "Adult" : "Minor";

// Modulus (remainder)
let isEven = num % 2 === 0;
```

## == vs === (Loose vs Strict)

```js
5 == "5"    // true  (type coercion)
5 === "5"   // false (different types)
null == undefined // true  (special rule)
null === undefined // false

// Always use === unless you explicitly need coercion
```

## Template Literals

```js
let msg = `Hello, ${name}! Age: ${age}`;
```

## Control Flow

### If-Else
```js
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}
```

### Switch
```js
switch (status) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("Unknown");
}
```

## Loops

```js
// For
for (let i = 0; i < 5; i++) { }

// While
while (condition) { }

// Do-While
do { } while (condition);

// For-Of (arrays)
for (let item of arr) { }

// For-In (objects)
for (let key in obj) { }
```

## Arrays

```js
let arr = [1, 2, 3, 4, 5];

// Access & Modify
arr[0];           // first element
arr.push(6);      // add to end
arr.pop();        // remove from end
arr.unshift(0);   // add to start
arr.shift();      // remove from start

// Iteration
arr.forEach(x => console.log(x));
arr.map(x => x * 2);        // [2, 4, 6, 8, 10]
arr.filter(x => x > 2);     // [3, 4, 5]
arr.reduce((sum, x) => sum + x, 0); // 15

// Search
arr.indexOf(3);       // 2
arr.includes(3);      // true
arr.find(x => x > 3); // 4

// Transform
arr.slice(1, 3);      // [2, 3]
arr.concat([6, 7]);   // [1, 2, 3, 4, 5, 6, 7]
[...arr, 6, 7];       // spread
```

## Functions

```js
// Function Declaration
function add(a, b) { return a + b; }

// Function Expression
const add = function(a, b) { return a + b; };

// Arrow Function
const add = (a, b) => a + b;
const greet = name => `Hello ${name}`;
const log = x => console.log(x);

// Default Parameters
function greet(name = "Guest") { }

// Rest Parameters
function sum(...nums) { return nums.reduce((a, b) => a + b); }

// Spread Operator
let merged = [...arr1, ...arr2];
let copy = { ...obj };

// IIFE (Immediately Invoked)
(function() { console.log("runs once"); })();

// Closure
function outer(x) {
    return function inner(y) { return x + y; };
}
```

## Strings

```js
let s = "Hello World";

// Properties & Methods
s.length;             // 11
s.toUpperCase();      // "HELLO WORLD"
s.toLowerCase();      // "hello world"
s.includes("World");  // true
s.indexOf("o");       // 4
s.slice(0, 5);        // "Hello"
s.substring(0, 5);    // "Hello"
s.replace("World", "JS"); // "Hello JS"
s.split(" ");         // ["Hello", "World"]
s.trim();             // remove whitespace
s.startsWith("Hello"); // true
s.endsWith("World");  // true
```

## Objects

```js
// Creation
let user = { name: "Ajay", age: 30, city: "Amethi" };

// Access
user.name;            // "Ajay"
user["name"];         // "Ajay"

// Destructuring
const { name, age } = user;
const { name: username, age: userage } = user;
const { country = "USA" } = user; // default value

// Spread
let clone = { ...user };
let merged = { ...user, role: "admin" };

// Getters & Setters
let person = {
    firstName: "Ajay",
    lastName: "Jaiswal",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    set fullName(name) { [this.firstName, this.lastName] = name.split(" "); }
};
```

## 2D Arrays

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix[0][1];  // 2 (row 0, col 1)
matrix[2][2];  // 9

// Iterate
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

## Callbacks

```js
// Synchronous Callback
function process(arr, callback) {
    return callback(arr);
}
process([1, 2, 3], arr => arr.map(x => x * 2));

// Asynchronous Callback
setTimeout(() => console.log("Delayed"), 1000);

// Callback Hell (nested callbacks)
getUser(id, user => {
    getPosts(user.id, posts => {
        getComments(posts[0].id, comments => {
            console.log(comments);
        });
    });
});
```

## Promises

```js
// Create
let order = new Promise((resolve, reject) => {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is delivered.");
    } else {
        reject("Order cancelled.");
    }
});

// Consume
order
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Done"));

// Promise.all (parallel)
Promise.all([promise1, promise2])
    .then(([res1, res2]) => console.log(res1, res2));
```

## Async/Await

```js
async function getData() {
    try {
        let result = await somePromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Cleanup");
    }
}
```

## OOP — Classes

### Class & Constructor
```js
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greet() {
        return `Hi, I'm ${this.name}`;
    }
}
```

### Static Members
```js
class MathUtils {
    static PI = 3.14;
    static add(a, b) { return a + b; }
}
MathUtils.PI;       // 3.14
MathUtils.add(2, 3); // 5
```

### Private & Public
```js
class BankAccount {
    #balance = 0;  // private field
    deposit(amount) { this.#balance += amount; }
    getBalance() { return this.#balance; }
}
```

### Inheritance
```js
class Animal {
    constructor(name) { this.name = name; }
    speak() { return `${this.name} makes a sound`; }
}

// Single Inheritance
class Dog extends Animal {
    speak() { return `${this.name} barks`; }  // Override
}

// Multi-level
class Puppy extends Dog {
    speak() { return `${this.name} yaps`; }
}

// Hierarchical
class Cat extends Animal {
    speak() { return `${this.name} meows`; }
}
```

### Encapsulation (Getters/Setters)
```js
class Car {
    #speed = 0;
    get speed() { return this.#speed; }
    set speed(value) {
        if (value >= 0) this.#speed = value;
    }
}
```

### Polymorphism (Method Overriding)
```js
class Shape {
    area() { return 0; }
}
class Circle extends Shape {
    constructor(r) { super(); this.radius = r; }
    area() { return Math.PI * this.radius ** 2; }
}
class Rectangle extends Shape {
    constructor(w, h) { super(); this.w = w; this.h = h; }
    area() { return this.w * this.h; }
}
```

## TypeScript

### Basic Types
```ts
let name: string = "Ajay";
let age: number = 30;
let isActive: boolean = true;
let ids: number[] = [1, 2, 3];
let tuple: [string, number] = ["Ajay", 30];
let unknown: unknown = "Hello";
let nothing: void = undefined;
```

### Type Annotations
```ts
// Function
function greet(name: string): string {
    return `Hello, ${name}`;
}

// Arrow Function
const multiply = (a: number, b: number): number => a * b;

// Object
let user: { name: string; age: number } = { name: "Ajay", age: 30 };
```

### Interfaces
```ts
interface APIResponse {
    body: string;
    Headers?: object;       // Optional
    readonly StatusCode: number;  // Read-only
    ResponseStatus: string;
}

let response: APIResponse = {
    body: "Hello",
    StatusCode: 200,
    ResponseStatus: "PASS"
};
// response.StatusCode = 404;  // Error! Read-only

// Readonly Array
interface Data {
    readonly items: readonly number[];
}

// Readonly Point
interface Point {
    readonly x: number;
    readonly y: number;
}
// point.x = 5;  // Error! Read-only
```

---

**Tip**: For any concept, find detailed examples in the corresponding chapter folder of this repo.
