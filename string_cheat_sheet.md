# Python String Methods Cheat Sheet

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `capitalize()` | Capitalizes first character | `"hello world".capitalize()` | `"Hello world"` |
| `casefold()` | Aggressive lowercasing for comparison | `"HELLO".casefold()` | `"hello"` |
| `center(width, fill)` | Centers string with padding | `"hi".center(6, "-")` | `"--hi--"` |
| `count(sub)` | Counts occurrences of substring | `"banana".count("a")` | `3` |
| `encode()` | Returns encoded bytes version | `"hello".encode()` | `b'hello'` |
| `endswith(suffix)` | Checks if string ends with suffix | `"file.txt".endswith(".txt")` | `True` |
| `expandtabs(tabsize)` | Replaces tabs with spaces | `"a\tb".expandtabs(4)` | `"a   b"` |
| `find(sub)` | Returns lowest index of substring | `"hello".find("l")` | `2` |
| `format(*args, **kwargs)` | Formats string with placeholders | `"Hello {}".format("World")` | `"Hello World"` |
| `format_map(mapping)` | Formats using dictionary mapping | `"{name}".format_map({"name": "John"})` | `"John"` |
| `index(sub)` | Like find() but raises ValueError | `"hello".index("l")` | `2` |
| `isalnum()` | Checks if all chars are alphanumeric | `"abc123".isalnum()` | `True` |
| `isalpha()` | Checks if all chars are alphabetic | `"abc".isalpha()` | `True` |
| `isascii()` | Checks if all chars are ASCII | `"hello".isascii()` | `True` |
| `isdecimal()` | Checks if all chars are decimals | `"123".isdecimal()` | `True` |
| `isdigit()` | Checks if all chars are digits | `"123".isdigit()` | `True` |
| `isidentifier()` | Checks if valid Python identifier | `"var_name".isidentifier()` | `True` |
| `islower()` | Checks if all cased chars are lowercase | `"hello".islower()` | `True` |
| `isnumeric()` | Checks if all chars are numeric | `"Ⅷ".isnumeric()` | `True` |
| `isprintable()` | Checks if all chars are printable | `"hello".isprintable()` | `True` |
| `isspace()` | Checks if all chars are whitespace | `"   ".isspace()` | `True` |
| `istitle()` | Checks if string is title case | `"Hello World".istitle()` | `True` |
| `isupper()` | Checks if all cased chars are uppercase | `"HELLO".isupper()` | `True` |
| `join(iterable)` | Joins iterable with string as separator | `"-".join(["a", "b", "c"])` | `"a-b-c"` |
| `ljust(width, fill)` | Left-justifies with padding | `"hi".ljust(6, "-")` | `"hi----"` |
| `lower()` | Converts to lowercase | `"HELLO".lower()` | `"hello"` |
| `lstrip(chars)` | Removes leading characters | `"  hello".lstrip()` | `"hello"` |
| `maketrans(x, y, z)` | Creates translation table | `str.maketrans("a", "b")` | `{97: 98}` |
| `partition(sep)` | Splits into 3 parts at first sep | `"hello world".partition(" ")` | `('hello', ' ', 'world')` |
| `removeprefix(prefix)` | Removes prefix if present | `"TestHook".removeprefix("Test")` | `"Hook"` |
| `removesuffix(suffix)` | Removes suffix if present | `"MiscTests".removesuffix("Tests")` | `"Misc"` |
| `replace(old, new, count)` | Replaces occurrences of substring | `"hello".replace("l", "x")` | `"hexxo"` |
| `rfind(sub)` | Returns highest index of substring | `"hello".rfind("l")` | `3` |
| `rindex(sub)` | Like rfind() but raises ValueError | `"hello".rindex("l")` | `3` |
| `rjust(width, fill)` | Right-justifies with padding | `"hi".rjust(6, "-")` | `"----hi"` |
| `rpartition(sep)` | Splits into 3 parts at last sep | `"a,b,c".rpartition(",")` | `('a,b', ',', 'c')` |
| `rsplit(sep, maxsplit)` | Splits from right | `"a,b,c".rsplit(",", 1)` | `['a,b', 'c']` |
| `rstrip(chars)` | Removes trailing characters | `"hello  ".rstrip()` | `"hello"` |
| `split(sep, maxsplit)` | Splits string into list | `"a,b,c".split(",")` | `['a', 'b', 'c']` |
| `splitlines(keepends)` | Splits at line boundaries | `"a\nb".splitlines()` | `['a', 'b']` |
| `startswith(prefix)` | Checks if string starts with prefix | `"hello".startswith("he")` | `True` |
| `strip(chars)` | Removes leading/trailing characters | `"  hello  ".strip()` | `"hello"` |
| `swapcase()` | Swaps case of all characters | `"HeLLo".swapcase()` | `"hEllO"` |
| `title()` | Converts to title case | `"hello world".title()` | `"Hello World"` |
| `translate(table)` | Translates using mapping table | `"hello".translate({101: 97})` | `"hallo"` |
| `upper()` | Converts to uppercase | `"hello".upper()` | `"HELLO"` |
| `zfill(width)` | Pads with zeros on left | `"42".zfill(6)` | `"000042"` |

## Bonus: Python Built-in String Functions

| Function | Description | Example | Output |
|----------|-------------|---------|--------|
| `len(s)` | Returns length of string | `len("hello")` | `5` |
| `chr(i)` | Returns character from Unicode code | `chr(65)` | `'A'` |
| `ord(c)` | Returns Unicode code of character | `ord('A')` | `65` |
| `repr(s)` | Returns printable representation | `repr("hello\n")` | `'hello\\n'` |
| `str(obj)` | Converts object to string | `str(42)` | `'42'` |
| `ascii(s)` | Returns ASCII representation | `ascii("café")` | `'caf\\xe9'` |

## String Slicing & Indexing Quick Reference

| Operation | Description | Example | Output |
|-----------|-------------|---------|--------|
| `s[i]` | Character at index i | `"hello"[1]` | `'e'` |
| `s[-i]` | Character from end | `"hello"[-1]` | `'o'` |
| `s[i:j]` | Slice from i to j | `"hello"[1:4]` | `'ell'` |
| `s[i:]` | Slice from i to end | `"hello"[2:]` | `'llo'` |
| `s[:j]` | Slice from start to j | `"hello"[:3]` | `'hel'` |
| `s[i:j:k]` | Slice with step k | `"hello"[::2]` | `'hlo'` |
| `s[::-1]` | Reverse string | `"hello"[::-1]` | `'olleh'` |
| `s in t` | Membership test | `'e' in "hello"` | `True` |
| `s + t` | Concatenation | `"Hello" + " " + "World"` | `'Hello World'` |
| `s * n` | Repetition | `"ha" * 3` | `'hahaha'` |
