const _array = new WeakMap();

class Stack{

    constructor(value) {
        this.count = 0;
        _array.set(this,[]);
    }

    push(value){
        _array.get(this).push(value);
        this.count++;
    }

    pop(){
        let data =  _array.get(this).pop()
        return data;
    }

    peek(){
        let lastIndex = _array.get(this).length - 1;
        let data = _array.get(this)[lastIndex];
        return data;
        }
}

let s= new Stack();
console.log(s);

