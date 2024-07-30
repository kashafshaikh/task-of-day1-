
// ### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.

// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15

function sumArray (number : number[]){
    return number.reduce ((accumulator , currentvalue)=> accumulator + currentvalue)
}
console.log (sumArray([1,2,3,4,5]));  //15
console.log (sumArray([1,3,3,6,5]));  //18
console.log (sumArray([1,2,4,4,5]));  //16

// Question 3: Reverse a String
// Instructions:

// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:

// Input: "hello"
// Output: "olleh"

function reverseString(str){
    return str.split("").reverse().join("")
} 
console.log (reverseString("hello"));   //olleh
console.log (reverseString("typescript"));  //tpircsepyt
console.log (reverseString("javascript"));  //tpircsavaj