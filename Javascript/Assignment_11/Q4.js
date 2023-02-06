// Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array

const prompt = require("prompt-sync")({ sigint: true });

let arrLength = prompt("Enter the length of the Array ");
let arr = [];
let dupArr = [];

for (let i = 0; i < arrLength; i++) {
  arr.push(parseInt(prompt(`Enter the ${i} of array `)));
}

function duplicateElements() {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        dupArr.push(arr[j]);
        arr.splice(j, 1);
      }
    }
  }
}

duplicateElements();
console.log(`Duplicate Elements = ` + dupArr);
console.log("Array without duplicate elements = " + arr);
