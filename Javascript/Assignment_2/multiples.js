function multiplesOf3()
{
    let sum1=0;
    for(let i=0;i<1000;i++){
        if(i%3==0)
        {
            sum1=sum1+i;
        }
    }
    return sum1;
}
function multiplesOf5()
{
    let sum2=0;
    for(let i=0;i<1000;i++){
        if(i%5==0)
        {
            sum2=sum2+i;            
        }
    }
    return sum2;
}

function multiples(){
    let sum1 = multiplesOf3();
    let sum2 = multiplesOf5();
    let result=0;
    for(let i=0;i<1000;i++){
        if(i%3==0 || i%5==0)
        {
            result=result+i;            
        }
    }
    console.log(`The sum of the multiples of 3 under 1000 is ${sum1}`);
    console.log(`The sum of the multiples of 5 under 1000 is ${sum2}`);
    console.log(`The sum of the multiples of 3 and 5 under 1000 is ${result}`);

}

multiples()
