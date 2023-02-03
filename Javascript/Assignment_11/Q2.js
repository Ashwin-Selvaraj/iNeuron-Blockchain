// Write a JavaScript program to take 2 arrays from the user and check if the
// // number 4 exists in any of the arrays, or both of the arrays.

const prompt = require("prompt-sync")({ sigint: true });

let arr1 = [];
let arr2 = [];
let count1 = 0,
  count2 = 0;

for (let j = 1; j <= 2; j++) {
  let arrLength = parseInt(prompt(`Enter the length of Array ${j} = `));
  for (let i = 0; i < arrLength; i++) {
    if (j == 1)
      arr1.push(parseInt(prompt(`Enter the ${i} index of Array ${j} = `)));
    else arr2.push(parseInt(prompt(`Enter the ${i} index of Array ${j} = `)));
  }
}

function check(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      count++;
    }
  }
  return count;
}
count1 = check(arr1);
count2 = check(arr2);

if (count1 && count2 != 0) {
  console.log(`The number 4 exists in both the arrays`);
} else if (count1 != 0 && count2 == 0) {
  console.log(`The number 4 exists in array 1`);
} else if (count1 == 0 && count2 != 0) {
  console.log(`The number 4 exists in array 2`);
} else {
  console.log(`The number 4 doesn't exists in both the arrays`);
}
