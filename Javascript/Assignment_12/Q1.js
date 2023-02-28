const prompt = require("prompt-sync")({ sigint: true });

let idArray = [];
let salArray = [];
let map = new Map();

function addEmployee(id, name, salary) {
  map.set(id, name);
  idArray.push(id);
  salArray.push(salary);
}

function getInput(n) {
  for (let i = 1; i <= n; i++) {
    let id = parseInt(prompt(`Enter the ${i} Employee ID `));
    let name = prompt(`Enter the ${i} Employee name `);
    let salary = parseInt(prompt(`Enter the ${i} Employee Salary `));
    addEmployee(id, name, salary);
  }
}

getInput(parseInt(prompt(`Enter the Number of Employees `)));

console.log(`The array of all employee ids is ${idArray}`);
console.log(`The count of employees is ${idArray.length}`);
idArray.map((n) => {
  console.log(`${n} : ${map.get(n)}`);
});
console.log(`The salaries of all employees in an array is ${salArray}`);
let sum = 0;
salArray.map((sal) => {
  sum = sum + sal;
});
console.log(
  `The average salary the company is paying to its employees is ${
    sum / salArray.length
  }`
);
