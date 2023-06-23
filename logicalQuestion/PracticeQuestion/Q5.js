// 5. WAP to find missing elements from the array?

let arr = [1 , 2 , 10];
let missingElement = findElement(arr);
console.log(missingElement);
function findElement(arr){
    let start = Math.min(...arr);
    let stop = Math.max(...arr);
    let newArr = [];
    for (let i = start; i < stop; i++) {
        if (!arr.includes(i)) {
            newArr.push(i);
        }
        
    }
    return newArr;
}
