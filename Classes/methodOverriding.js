class Shape {
    constructor(color) {
        this.color = color
    }

    move(){
        console.log('Move...');
    }
}

class Circle extends Shape {
    constructor(color,radius){
        super(color);
        this.radius = radius
    }
    
    move(){
        super.move();
        console.log('Move Circle..');
    }
    draw() {
        console.log('Draw..');
    }
}

let c = new Circle('red', 5);
console.log(c);