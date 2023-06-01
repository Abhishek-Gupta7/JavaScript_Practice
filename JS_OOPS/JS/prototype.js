function Circle(radius){
    this.radius = radius;
    this.move = () => {
        console.log("Move ...")
    }
}
Circle.prototype.draw = function(){
    console.log("Draw Method..");
}

let c1 = new Circle(5);
let c2 = new Circle(7);

Circle.prototype.toString = function(){
    return JSON.stringify(this);
}

// It only show own peoperty
console.log(Object.keys(c1));
for (const key in c1) {
    console.log(`${key} : ${c1[key]}`);
}