function prime(a,b){

    let result = 1;
    for(let i=a;i<=b;i++)
    {
        var count=0;        
        if(i>2)
        {
            for(let j=2;j<i;j++)
            {
                if(i%j == 0)
                {
            
                    count++;
                    break;
                } 
                 
            }
            if(count==0)
            {
                result=result*i;
            }
            
        }

        }
        console.log(`the factorial of all prime numbers between the given range ${a}, ${b} is ${result}`);
        
}

prime(4,7)

