const _radius = new WeakMap();

class Circle{
    constructor(radius) {
        _radius.set(this,radius);
    }

    draw(){
        console.log(`Drawing circle of radius ${_radius.get(this)}..`);
    }

    static parse(str){
        let radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
// let c1  = new Circle(3);
// console.log(c1);
// c1.draw();

let c1 = Circle.parse(`{"radius":5}`);
console.log(c1);

