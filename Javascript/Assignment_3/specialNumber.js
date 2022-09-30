function specialNumber(n){

    let a=n;
    let sum=0;
    while(n/10!=0)
    {
        let rem = n%10;
        sum=sum+factorial(rem);
        n=Math.floor(n/10);

    }

    if(sum==a)
    {
        console.log(`The given number ${a} is a special number`);
    }
    else
    {
        console.log(`The given number ${a} is not a special number`);
    }

}

function factorial(n){
    let result=1;
    for(let i=1;i<=n;i++){
        result=result*i;
    }
    return result;
}

specialNumber(145);