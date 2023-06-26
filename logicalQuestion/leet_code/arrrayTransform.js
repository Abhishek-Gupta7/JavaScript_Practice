/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];
    // console.log(arr,arr.length);
    for(let i = 0 ; i < 3 ;i++){
        // console.log(i);
        // console.log(fn(arr[i],i));
        newArray.push(fn(arr[i],i));
    }
    // console.log(newArray);
    return newArray;
};

function fn1(n) {
    return n + 1;
}

function fn2() {
    return 42;
}

let result = map([1,2,3],fn1);
console.log(result);