function armstrong(n){

    let a=n;
    let sum=0;
    while(n/10!=0)
    {
        let rem=n%10;
        sum=sum+(rem*rem*rem);
        n=Math.floor(n/10)
    }
    if(a==sum)
    {
        console.log(`The given number ${a} is an armstrong number`);
    }
    else
    {
        console.log(`The given number ${a} is not an armstrong number`);
    }


}

armstrong(153);