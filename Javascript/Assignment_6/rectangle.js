class Rectangle{
    constructor(_length,_breadth)
    {
        this.length=_length;
        this.breadth=_breadth;
    }

    area()
    {
        return this.length*this.breadth;
    }
    
}

class Square extends Rectangle{
    constructor(side,length,breadth)
    {
        super(length,breadth);
        this.length=side;
        this.breadth=side;           
    }
}

let obj1 = new Square(10);
console.log(`The Area of Square is ${obj1.area()}`);

let obj2 = new Rectangle(10,12);
console.log(`The Area of Rectangle is ${obj2.area()}`);
