// Top 30 Array Methods in JavaScript

// 1. push() - Adds one or more elements to the end of an array and returns the new length.
let arr = [1, 2, 3];
arr.push(4); // Adds 4 at the end of the array
console.log(arr); // [1, 2, 3, 4]

// 2. pop() - Removes the last element from an array and returns that element.
arr.pop(); // Removes 4 from the array
console.log(arr); // [1, 2, 3]

// 3. shift() - Removes the first element from an array and returns that element.
arr.shift(); // Removes 1 from the array
console.log(arr); // [2, 3]

// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length.
arr.unshift(0); // Adds 0 at the beginning
console.log(arr); // [0, 2, 3]

// 5. concat() - Combines two or more arrays and returns a new array.
let arr2 = [4, 5];
let combined = arr.concat(arr2); // Combines arr and arr2
console.log(combined); // [0, 2, 3, 4, 5]

// 6. join() - Joins all elements of an array into a string, separated by a specified delimiter.
let str = arr.join('-'); // Join elements with '-'
console.log(str); // "0-2-3"

// 7. slice() - Returns a shallow copy of a portion of an array into a new array.
let sliced = arr.slice(1, 3); // Extract elements from index 1 to 3 (excluding 3)
console.log(sliced); // [2, 3]

// 8. splice() - Changes the content of an array by removing or replacing elements.
arr.splice(1, 1, 10); // Starts at index 1, removes 1 element, and inserts 10
console.log(arr); // [0, 10, 3]

// 9. forEach() - Executes a provided function once for each array element.
arr.forEach((item) => console.log(item)); // Logs each element of the array

// 10. map() - Creates a new array by applying a function to each element of the array.
let doubled = arr.map((item) => item * 2); // Multiplies each element by 2
console.log(doubled); // [0, 20, 6]

// 11. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let greaterThanFive = arr.filter((item) => item > 5); // Filters elements greater than 5
console.log(greaterThanFive); // [10]

// 12. reduce() - Applies a function to each element of an array (from left to right) to reduce it to a single value.
let sum = arr.reduce((acc, curr) => acc + curr, 0); // Sums all elements
console.log(sum); // 13

// 13. reduceRight() - Same as reduce() but applies the function from right to left.
let product = arr.reduceRight((acc, curr) => acc * curr, 1); // Multiplies all elements
console.log(product); // 0

// 14. some() - Checks if at least one element in the array passes the provided test.
let hasNegative = arr.some((item) => item < 0); // Checks if any element is negative
console.log(hasNegative); // false

// 15. every() - Checks if all elements in the array pass the provided test.
let allPositive = arr.every((item) => item >= 0); // Checks if all elements are >= 0
console.log(allPositive); // true

// 16. find() - Returns the first element that satisfies the provided test.
let firstGreaterThanFive = arr.find((item) => item > 5); // Finds the first element > 5
console.log(firstGreaterThanFive); // 10

// 17. findIndex() - Returns the index of the first element that satisfies the provided test.
let index = arr.findIndex((item) => item > 5); // Finds the index of first element > 5
console.log(index); // 1

// 18. sort() - Sorts the elements of an array in place and returns the array.
arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(arr); // [0, 3, 10]

// 19. reverse() - Reverses the order of the elements in the array.
arr.reverse(); // Reverses the array
console.log(arr); // [10, 3, 0]

// 20. includes() - Checks if an array contains a specific element.
let hasThree = arr.includes(3); // Checks if 3 is in the array
console.log(hasThree); // true

// 21. indexOf() - Returns the index of the first occurrence of a specified element.
let indexOfThree = arr.indexOf(3); // Finds the index of 3
console.log(indexOfThree); // 1

// 22. lastIndexOf() - Returns the index of the last occurrence of a specified element.
arr.push(3); // Add another 3 to test lastIndexOf
let lastIndexOfThree = arr.lastIndexOf(3); // Finds the last index of 3
console.log(lastIndexOfThree); // 3

// 23. flat() - Flattens a nested array into a single array.
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatArr = nestedArr.flat(2); // Flattens two levels of nested arrays
console.log(flatArr); // [1, 2, 3, 4, 5, 6]

// 24. flatMap() - Applies a function to each element of an array, then flattens the result.
let mappedAndFlattened = arr.flatMap((item) => [item, item * 2]);
console.log(mappedAndFlattened); // [10, 20, 3, 6, 0, 0]

// 25. copyWithin() - Shallow copies a portion of an array to another location within the same array.
arr.copyWithin(1, 0, 2); // Copies elements from index 0 to 2, starts from index 1
console.log(arr); // [10, 10, 3]

// 26. fill() - Fills all the elements in an array with a static value from a start index to an end index.
arr.fill(100, 1, 3); // Fills elements from index 1 to 3 with 100
console.log(arr); // [10, 100, 100]

// 27. from() - Creates a new array instance from an array-like or iterable object.
let strArray = 'hello';
let arrayFromString = Array.from(strArray); // Converts string to array
console.log(arrayFromString); // ['h', 'e', 'l', 'l', 'o']

// 28. keys() - Returns a new Array Iterator object that contains the keys of each element in an array.
let keys = arr.keys();
console.log([...keys]); // [0, 1, 2]

// 29. values() - Returns a new Array Iterator object that contains the values of each element in an array.
let values = arr.values();
console.log([...values]); // [10, 100, 100]

// 30. sort() - Similar to the earlier mentioned `sort()` method but is often used in tandem with custom comparators.
arr.sort((a, b) => b - a); // Sorts the array in descending order
console.log(arr); // [100, 100, 10]
