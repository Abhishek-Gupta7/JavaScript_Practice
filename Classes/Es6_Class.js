class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    draw(){
        console.log('Drawing Circle..');
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