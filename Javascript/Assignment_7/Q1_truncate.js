let S="icecream"
let len = 4;

if(S.length>4)
{
    console.log(S.substring(0,len));

    /*
    let i=4;
    let finalStr=""
    let itr = S[Symbol.iterator]()
    let res = itr.next();
    while(i>0)
    {
        finalStr=finalStr + res.value;
        res=itr.next();
        i--;
    }
    console.log(finalStr);
    */

    
}
else
{
    console.log(S);
}
