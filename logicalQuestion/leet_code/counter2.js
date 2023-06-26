
var createCounter = function(n) {
    let counter = n;
    function increment() {
        counter += 1
        return counter;
    }
    function reset() {
        counter = n;
        return counter;
    }
    function decrement() {
        counter -= 1
        return counter;
    }
    return {increment,reset,decrement};
};


const counter = createCounter(5)
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.reset()); 
