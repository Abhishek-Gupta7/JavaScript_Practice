function extend(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.colour = color;
}

Shape.prototype.duplicate = function(){
    console.log('Duplicate method...');
}

function Circle (r,color){
    this.radius = r;
    Shape.call(this,color)
}
extend(Circle,Shape);
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
Circle.prototype.draw = function(){
    console.log('Draw method....');
}
Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this);
    console.log('Circle duplicate..');
}

const c = new Circle(2,'blue');

function Square(s){
    this.side = s;
}
extend(Square,Shape);
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Shape;
Square.prototype.area = function(){
    console.log('side x side');
}

const s = new Square(2);
