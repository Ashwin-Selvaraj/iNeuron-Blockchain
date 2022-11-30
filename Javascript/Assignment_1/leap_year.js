let year = 2004;
if((year%4 == 0 && year%100 ==0 && year%400 == 0))
{
    console.log(year+" is a leap year");
}
else if(year%4 == 0 && year%100 !=0 && year%400 != 0)
{
    console.log(year+" is a leap year");
}
