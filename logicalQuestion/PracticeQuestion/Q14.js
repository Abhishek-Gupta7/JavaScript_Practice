// 14. [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

// First way
let arr = [80, 60, 10, 50, 30, 100, 0, 50];
let sum = 100;
let countPair = 0;
let pairNumber = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (sum === arr[i] + arr[j]) {
            countPair++;
            pairNumber = [...pairNumber,[arr[i],arr[j]]];
        }
    }
}
console.log(pairNumber);
// Time Complexity is O(n^2)



// Second Way
// let arr = [80, 60, 10, 50, 30, 100, 0, 50];
// let sum = 100;
// let pair = [];
// let sortArray = arr.sort((a , b) => {if(a < b) return -1});
// let start = 0;
// let end = arr.length - 1;


// while(start < parseInt(sortArray.length/2) ){
//     if (sum === (sortArray[start] + sortArray[end])) {
//         pair = [...pair,[sortArray[start],sortArray[end]]];
//         start++;
//         continue;
//     }
//     if (sum < (sortArray[start] + sortArray[end])) {
//         end--;
//         continue;
//     }
//     if (sum > (sortArray[start] + sortArray[end])) {
//         start++;
//     }
// }
// console.log(pair);

// Time Complexity is O(n)