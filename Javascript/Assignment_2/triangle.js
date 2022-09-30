function triangle(a,b,c) {
    if(a==b && b==c)
    console.log("The Triangle is an equilateral triangle");
    else if(a==b || b==c || a==c)
    console.log(("The Triangle is an Isosceles triangle"));
    else
    console.log(("The Triangle is a Scalene triangle"));
}

triangle(3,1,3);
