const _radius = Symbol(); 
const _draw = Symbol(); 

class Circle{
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw](){
        console.log('Drawing Circle..');
    }

    static parse(str){
        let radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
let c1  = new Circle(3);
console.log(c1);

let key = Object.getOwnPropertySymbols(c1)[0];
console.log(c1[key]);

// let c1 = Circle.parse(`{"radius":5}`);
// console.log(c1);