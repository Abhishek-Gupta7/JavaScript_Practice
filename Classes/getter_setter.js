let _radius = new WeakMap();
const _move = new WeakMap();

class Circle{
    constructor(radius) {
        _radius.set(this,radius);
        _move.set(this,() => {
            console.log('Move : ',this);
        })

    }
    get radius(){
        return _radius.get(this);
    }
    set radius(value){
        if (value <= 0) throw new Error('Please enter number greater than 0..')
        return _radius.set(this,value);
    }

    draw(){
        privateProps.get(this).move();
        console.log('Draw circle of radius : ',privateProps.get(this).radius);
    }

    static parse(str){
        let radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
let c  = new Circle(3);
console.log(c);