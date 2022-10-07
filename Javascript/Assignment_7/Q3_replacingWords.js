let S = "Hii Boy"
let arr = S.split(' ')
let str = ""

for(let i=arr.length;i>0;i--)
{
    str = str + arr[i-1]+" ";
}
console.log(str);
