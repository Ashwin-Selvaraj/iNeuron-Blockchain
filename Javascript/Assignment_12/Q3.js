let arr=[];
let newArr=[];

const prompt = require("prompt-sync")({sigint:true});

let n=parseInt(prompt("Enter the size of Array "));
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Enter the ${i} index of Array `)))    
}
function square(arr) {
    arr.map((num)=>
    {
        newArr.push(num*num);
    })
    return newArr;
}
console.log(square(arr));