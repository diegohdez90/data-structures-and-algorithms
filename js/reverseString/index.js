import { Stack } from "../classes/index.js"

function reverseString(value) {
  var stack = new Stack()
  var charactersFromString = value.split('')
  for (let index = 0; index < charactersFromString.length; index++) {
    stack.push(charactersFromString[index])
  }
  var result = ''
  while (stack.top !== null) {
    result += stack.pop().value
  }

  return result
}

const input1 = "Hello, World!";
const expected1 = "!dlroW ,olleH";
const result1 = reverseString(input1);
console.log(`Input: "${input1}" | Expected: "${expected1}" | Result: "${result1}"`);

const input2 = "abcd";
const expected2 = "dcba";
const result2 = reverseString(input2);
console.log(`Input: "${input2}" | Expected: "${expected2}" | Result: "${result2}"`);

const input3 = "12345";
const expected3 = "54321";
const result3 = reverseString(input3);
console.log(`Input: "${input3}" | Expected: "${expected3}" | Result: "${result3}"`);

const input4 = "";
const expected4 = "";
const result4 = reverseString(input4);
console.log(`Input: "${input4}" | Expected: "${expected4}" | Result: "${result4}"`);

