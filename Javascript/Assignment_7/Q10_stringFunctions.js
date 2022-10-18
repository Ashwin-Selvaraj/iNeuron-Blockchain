let str = "Ashwin";
function upperCase(str) {
  console.log(str.toUpperCase());
}
function firstLetterToUpperCase(str) {
  let arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i];
  }
  console.log(str);
}
function lowerCase(str) {
  console.log(str.toLowerCase());
}

function cutString(str) {
  let n = Math.floor(str.length / 2);
  let str1 = str.slice(n, str.length);
  let str2 = str.slice(0, n);
  console.log(str1 + str2);
}

let map = new Map();
function count(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    var count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count = count + 1;
      }
    }
    if (count > 0) {
      map.set(arr[i], count);
    }
  }
  console.log(map);
}

function reverse(str) {
  let arr = str.split("");
  arr.reverse();
  str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i];
  }
  console.log(str);
}

upperCase(str);
firstLetterToUpperCase(str);
lowerCase(str);
cutString(str);
count(str);
reverse(str);
