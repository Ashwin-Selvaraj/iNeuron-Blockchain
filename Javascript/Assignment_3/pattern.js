function pattern(n){

    let a=1;
    for(let i=1;i<=n;i++)
    {
        let string="";
        for(let j=1;j<=i;j++,a++)
        {
            string=string+a+" ";
            
            
        }
        console.log(string);
    } 
}
pattern(4);
