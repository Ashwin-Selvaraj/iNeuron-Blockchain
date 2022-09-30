function matchHouse(n) {
    let result=0;

    if(n==1)
    {
        return 6;
    }
    else if(n<0 || typeof(n)!="number")
    {
        console.log("The input (step) will always be a non-negative integer.");
    }
    else 
    {
        result=(n*6)-(n-1);
        return result;
    }

}

console.log(matchHouse(87));
