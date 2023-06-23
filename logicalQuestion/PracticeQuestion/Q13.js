// 13. WAP with 2 different logic, to find all duplicate number in an array

// 1st Way
// let array = [1, 1, 2, 2, 3, 4, 5, 6, 4];
// let duplicate = [];

// for (let j = 0; j < array.length; j++) {
//   if (!duplicate.includes(array[j])) {
//     for (let i = j + 1; i < array.length; i++) {
//       if (array[j] === array[i]) {
//         duplicate.push(array[j]);
//       }
//     }
//   }
// }
// console.log(duplicate);


// Time Complexity is O(n^2)

// 2nd Way
let start = Date.now();
let array = [1, 1, 2, 2, 3, 4, 5, 6, 4 , 100 ,40 , 100];
let duplicate = []
function checkDuplicate(i , next ,count , length){
    console.log( i , next , count ,length);
    if (count === length) return;
    if (array[i] === array[next]) {
        duplicate.push(array[i]);
        checkDuplicate(i + 1, i + 2 ,count + 1 ,length);
    }
    if (next <= length) {
        checkDuplicate(i ,next + 1,count , length);
    }
    if (next > length) {
        checkDuplicate(i +  1 ,i + 2,count + 1 , length);
    }
}

checkDuplicate(0 , 1 , 0 ,array.length - 1);
console.log(duplicate);
let end = Date.now();
console.log(end - start);