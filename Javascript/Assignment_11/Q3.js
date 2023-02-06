let arr = [1,[2,[3],22,[3]]];
let arr1=[];

function arrayFlat()
{
    console.log(arr.length);
    for(let i=0;i<arr.length;i++)
    {
        if(typeof(arr[i])!=typeof(0))
        {
            flat(arr[i]);
        }
        else
        {
            arr1.push(arr[i]);
        }
    }
}

function flat(arr)
{
    for(let j=0;j<arr.length;j++)
    {
        if(typeof(arr[j])!=typeof(0))
        {
            flat(arr[j]);
        }
        else
        {
            arr1.push(arr[j]);
        }
    }
}

arrayFlat()
console.log(arr1);