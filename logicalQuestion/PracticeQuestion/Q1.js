// 1. WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], 
// without sorting, without using any built-in methods and without deleting duplicate 
// elements. What will be the time complexity?

// let arr = [100 , 100 , 22 , 22]
// let arr = [12, 35, 1, 100, 34, 1, 35];

/*          *********  First Way ******         */
let maxElement = findMax(arr);
// console.log(maxElement);
function findMax(arr){
    let max = arr[0];
    for (let value of arr) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}
// Time complexity of findMax is 0(n);
let difference = maxElement;
let secondLargest = maxElement;
for (let value of arr) {
    if (maxElement !== value) {
        let newDifference = maxElement - value;
        if (newDifference < difference) {
            secondLargest = value;
            difference = newDifference;
        }
    }
}
console.log(secondLargest);

// Time Complexity of first way is O(n) + O(n) = O(2n) i.e. O(n)


/*          **********         Second Way   ************            */

// let arr = [100 , 100 , 22 , 22]
// let arr = [12, 35, 1, 100, 340, 1, 35];
// getting max number
// let max = Math.max(...arr);
// // console.log(max);
// // set diff max because difference betn 1 and 2 number will be minimum.
// let difference = max;
// // setting second largest as array 1 element , because if array contain only one element.
// let secondLargest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (max !== arr[i]) {
//         let newDifference = max - arr[i];
//         if(newDifference < difference){
//             secondLargest = arr[i];
//             difference = newDifference;
//         }
//     }
// }
// console.log(secondLargest);

// Time Complexity of second way is O(n);
