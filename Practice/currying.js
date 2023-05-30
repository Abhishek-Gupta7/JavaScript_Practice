function evaluate(operation) {
    if (typeof operation === 'string') {
        switch(operation.toLowerCase()){
            case 'sum':
                return sum;
            case 'sub':
                return sub;
            case 'mul':
                return mul;
            case 'div':
                return div;
            default:
                console.log("Please enter correct operation....");
        }
    }
}

function sum(a) {
    return function(b) {
        return a + b;
    }
}
function sub(a) {
    return function(b) {
        return a - b;
    }
}
function mul(a) {
    return function(b) {
        return a * b;
    }
}
function div(a) {
    return function(b) {
        return a / b;
    }
}

// let sum1 = evaluate('sum');
// console.log(sum1(5)(5));
// console.log(sum1(5)(15));
// console.log(sum1(52)(5));
// console.log(evaluate('sum')(4)(2));
// console.log(evaluate('sub')(4)(2));
// console.log(evaluate('mul')(4)(2));
// console.log(evaluate('DIV')(4)(2));

// /************* Infinite currying    ****************** */

// function infinitCurrying(a) {
//     return function(b) {
//         if (b) return infinitCurrying(a + b);
//         return a;
//     }
// }
// console.log(infinitCurrying(1)(2)(3)(4)(5)());

// /****************   Custom Currying    ********* */
// function currying(func) {
//     let funcName = func.name;
//     let args = func.length;
//     console.log(funcName,args);
//     funcName = createFunction(args);
//     console.log(funcName(2)(3)());
// }


function f(a,b,c) {
    return a + b + c;
}

// function createFunction (count){
//     if (count > 0){
//         count--;
//         return function(b){
//             return createFunction(count)
//         }
//     }
//     else{

//     }
// }

// YouTube move 
function currying(func) {
    return function curried(...args) {
        if(args.length < func.length){
            return function(...next){
                return curried(...args,...next);
            }
        }else{
            return f(...args);
        }
    }
}
let res = currying(f);
console.log(res(1)(2));