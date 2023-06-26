
var createCounter = function(n) {
    let counter = n - 1;
    return function() {
        counter += 1
        return counter;
    };
};


const counter = createCounter(-2)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
