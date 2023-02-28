const prompt = require("prompt-sync")({ sigint: true });
let n = parseInt(prompt("Enter the Number of Students "));
let nameArr = [];
let numArr = [];
let scoreArr = [];
let map = new Map();
for (let i = 1; i <= n; i++) {
  let n = parseInt(prompt("Enter Students ID "));
  nameArr.push(prompt(`Enter Student ${i} name `));
  scoreArr.push(parseInt(prompt(`Enter the score of Student ${i} `)));
  numArr.push(n);
  // map.set(n,nameArr[i]);
}
map.set("ID ", numArr);
map.set("Name ", nameArr);
map.set("Score ", scoreArr);

console.log(nameArr);
console.log("one parameter");
console.log(map.get("ID "));
console.log(map.get("Name "));
console.log(map.get("Score "));

console.log("two parameter");
console.log("three parameter");
console.log(map);
