// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places

const prompt = require("prompt-sync")({ sigint: true });
let arr = [];
let arrLength = prompt("Enter the length of array ");

// function to get input array from user
function input() {
  for (let i = 0; i < arrLength; i++) {
    arr.push(parseInt(prompt(`Enter the ${i} index of array `)));
  }
}
input();

function calculate() {
  let odd=0,even=0,oddCount=0,evenCount=0,sums = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    sums=sums+arr[i];
    if (i % 2 == 0) 
    {
      odd = odd + arr[i];
      oddCount = oddCount + 1;
    } 
    else 
    {
      even = even + arr[i];
      evenCount = evenCount + 1;
    }
  }
  if (odd > even) {
    console.log(`The difference between the two sums is ${odd - even}`);
  } else {
    console.log(`The difference between the two sums is ${even - odd}`);
  }
  console.log(`The number of elements in odd places is ${oddCount}`);
  console.log(`The number of elements in even places is ${evenCount}`);
  console.log(`The average of all elements in the array is ${sums/arrLength}`);
  GCD(odd,even);
}

calculate()

function GCD(odd,even)
{
    let rem1=odd;
    let rem2=even;
    let arr1=[];
    let arr2=[];
    for(let i=1;i<=odd;i++)
    {
        if(odd%i==0)
        {
            rem1=rem1/i;
            arr1.push(i);
        }
    }
    for(let i=1;i<=even;i++)
    {
        if(even%i==0)
        {
            rem2=rem2/i;
            arr2.push(i);
        }
    }
    let count=0;
    for(let i=arr1.length-1;i>=0;i--)
    {
        if(count>0)
        break;
        for(let j=arr2.length-1;j>=0;j--)
        {
            if(arr1[i]===arr2[j])
            {
                count++;
                console.log(`GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places is ${arr1[i]}`);
                break;
            }
            
        }

    }
}
