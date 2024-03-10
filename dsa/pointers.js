/**
 * NOT A POINTER
 */
let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num1, num2)

/**
 * A POINTER
 */

let obj1 = {
  value: 11
}

// This is a reference
// obj2 is pointing to obj1
let obj2 = obj1
obj1.value = 22;

console.log(obj1.value, obj2.value)