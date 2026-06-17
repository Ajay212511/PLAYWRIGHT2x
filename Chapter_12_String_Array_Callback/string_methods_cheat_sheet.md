# JavaScript String Methods Cheat Sheet

A comprehensive one-liner reference for every built-in `String` method in JavaScript (ES2022).

---

## 1. Length & Access

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `length` | Returns number of characters | `"Hello".length` | `5` |
| `charAt(index)` | Character at index | `"Hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Unicode of character at index | `"Hello".charCodeAt(0)` | `72` |
| `at(index)` | Character at index (supports negatives) | `"Hello".at(-1)` | `"o"` |
| `[index]` | Bracket notation access | `"Hello"[1]` | `"e"` |

---

## 2. Case Conversion

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `toLowerCase()` | Converts to lowercase | `"HELLO WORLD".toLowerCase()` | `"hello world"` |
| `toUpperCase()` | Converts to uppercase | `"hello world".toUpperCase()` | `"HELLO WORLD"` |
| `toLocaleLowerCase(locale)` | Locale-aware lowercase | `"I".toLocaleLowerCase("tr")` | `"ı"` |
| `toLocaleUpperCase(locale)` | Locale-aware uppercase | `"i".toLocaleUpperCase("tr")` | `"İ"` |

---

## 3. Searching & Checking

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `indexOf(sub, fromIndex)` | First index of substring | `"banana".indexOf("a")` | `1` |
| `lastIndexOf(sub, fromIndex)` | Last index of substring | `"banana".lastIndexOf("a")` | `5` |
| `includes(sub, fromIndex)` | Checks if substring exists | `"hello world".includes("world")` | `true` |
| `startsWith(sub, fromIndex)` | Checks if string starts with | `"hello world".startsWith("hello")` | `true` |
| `endsWith(sub, length)` | Checks if string ends with | `"hello world".endsWith("world")` | `true` |

---

## 4. Extracting & Slicing

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `slice(start, end)` | Extracts section of string | `"hello world".slice(0, 5)` | `"hello"` |
| `substring(start, end)` | Extracts between indices (no negatives) | `"hello world".substring(6, 11)` | `"world"` |
| `substr(start, length)` | Extracts from start for length | `"hello world".substr(6, 5)` | `"world"` |

---

## 5. Modifying & Replacing

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `replace(search, replacement)` | Replaces first match | `"hello world".replace("world", "JS")` | `"hello JS"` |
| `replaceAll(search, replacement)` | Replaces all matches | `"banana".replaceAll("a", "o")` | `"bonono"` |
| `repeat(count)` | Repeats string count times | `"ha".repeat(3)` | `"hahaha"` |
| `concat(...strings)` | Joins two or more strings | `"Hello".concat(" ", "World")` | `"Hello World"` |

---

## 6. Trimming & Padding

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `trim()` | Removes whitespace from both ends | `"  hello  ".trim()` | `"hello"` |
| `trimStart()` / `trimLeft()` | Removes whitespace from start | `"  hello  ".trimStart()` | `"hello  "` |
| `trimEnd()` / `trimRight()` | Removes whitespace from end | `"  hello  ".trimEnd()` | `"  hello"` |
| `padStart(targetLength, padString)` | Pads from start | `"42".padStart(5, "0")` | `"00042"` |
| `padEnd(targetLength, padString)` | Pads from end | `"42".padEnd(5, "0")` | `"42000"` |

---

## 7. Splitting & Joining

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `split(separator, limit)` | Splits string into array | `"a,b,c".split(",")` | `["a", "b", "c"]` |

---

## 8. Unicode & Conversion

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `codePointAt(index)` | Returns Unicode code point | `"𠮷".codePointAt(0)` | `134071` |
| `String.fromCharCode(...codes)` | Creates string from Unicode values | `String.fromCharCode(72, 101, 108, 108, 111)` | `"Hello"` |
| `String.fromCodePoint(...codes)` | Creates string from code points | `String.fromCodePoint(134071)` | `"𠮷"` |
| `normalize(form)` | Unicode normalization | `"é".normalize("NFD")` | `"é"` |
| `toString()` | Returns string representation | `(123).toString()` | `"123"` |
| `valueOf()` | Returns primitive string value | `new String("hello").valueOf()` | `"hello"` |

---

## 9. Matching & Regex

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `match(regex)` | Matches against regex | `"hello 123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | Iterator of all matches | `[..."test1 test2".matchAll(/test(\d)/g)][0][0]` | `"test1"` |
| `search(regex)` | Returns index of first regex match | `"hello world".search(/world/)` | `6` |
| `replace(regex, callback)` | Replaces using function | `"hello 123".replace(/\d+/, n => n * 2)` | `"hello 246"` |

---

## 10. Template Literals & Interpolation

| Syntax | Description | Example | Output |
|--------|-------------|---------|--------|
| `` `...${var}...` `` | Template literal with interpolation | `` `Hello, ${"Alice"}!` `` | `"Hello, Alice!"` |
| Tagged templates | Function + template literal | `` tag`Hello ${"World"}!` `` | `tag(["Hello ", "!"], ["World"])` |

---

## Bonus: Slicing & Indexing Quick Reference

| Operation | Description | Example | Output |
|-----------|-------------|---------|--------|
| `s[0]` | First character | `"JavaScript"[0]` | `"J"` |
| `s[s.length - 1]` | Last character | `"JavaScript"[9]` | `"t"` |
| `s.slice(-3)` | Last 3 characters | `"JavaScript".slice(-3)` | `"ipt"` |
| `s.slice(0, 4)` | First 4 characters | `"JavaScript".slice(0, 4)` | `"Java"` |
| `s.split('').reverse().join('')` | Reverse string | `"JavaScript".split('').reverse().join('')` | `"tpircSavaJ"` |

---

## Primitive vs Object

| Type | Creation | typeof | Notes |
|------|----------|--------|-------|
| Primitive | `"hello"` | `"string"` | ✅ Always use this |
| Object | `new String("hello")` | `"object"` | ❌ Avoid for performance |

---

## Legend
- 🆕 **ES2015** = `at()`, `codePointAt()`, `String.fromCodePoint()`, `normalize()`, `repeat()`, template literals
- 🆕 **ES2017** = `padStart()`, `padEnd()`
- 🆕 **ES2019** = `trimStart()`, `trimEnd()`
- 🆕 **ES2020** = `matchAll()`
- 🆕 **ES2021** = `replaceAll()`
- 🆕 **ES2022** = `at()`
