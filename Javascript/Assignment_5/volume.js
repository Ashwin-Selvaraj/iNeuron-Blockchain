class Cylinder
{
    getVolume(r,h)
    {
        const pi = Math.PI;
        let volume = pi*r*r*h;
        return volume;
    }
    
}

class Sphere
{
    getVolume(r,h)
    {
        const pi = Math.PI;
        let volume = 4/3*pi*(Math.pow(r,3));
        return volume;
    }
    
}

class Cone
{
    getVolume(r,h)
    {
        const pi = Math.PI;
        let volume = (pi*r*r*h)/3;
        return volume;
    }
    
}


let obj1 = new Cylinder();
console.log((obj1.getVolume(5,20)).toFixed(4));


let obj2 = new Sphere();
console.log((obj2.getVolume(5,200)).toFixed(4));


let obj3 = new Cone();
console.log((obj3.getVolume(5,200)).toFixed(4));
