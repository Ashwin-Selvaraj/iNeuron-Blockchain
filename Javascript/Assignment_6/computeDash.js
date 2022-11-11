function computeDash(n)
{
    let numToStr = n.toString();
    let arrOfNum = numToStr.split("");
    let n1,n2=0
    let finalStr=arrOfNum[0];

    for(let i=1;i<arrOfNum.length;i++)
    {
        n1 = parseInt(arrOfNum[i-1]);
        n2 = parseInt(arrOfNum[i]);
        if(n1%2==0 && n2%2==0)
        {
            finalStr=finalStr + "-" + n2.toString();
        }
        else
        {
            finalStr=finalStr + n2.toString();
        }   
    }
    console.log(finalStr);
}
computeDash(025468);
