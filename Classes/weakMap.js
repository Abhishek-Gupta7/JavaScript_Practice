let _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle{
    constructor(radius) {
        // _radius.set(this,radius);
        // _move.set(this,() => {
        //     console.log('Move : ',this);
        // })
        privateProps.set(this,{
            radius,
            move : () => {
                console.log('Move : ',this);
            }
        })

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
let c1  = new Circle(3);
console.log(c1);