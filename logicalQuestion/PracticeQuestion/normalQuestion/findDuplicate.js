let array = [1 , 1 , 2 , 3  , 4,  5 ,6 , 3, 4, 2 , 56 , 56];
let dup = [];
// 1st way
// let start = Date.now();
// function recurrsion(start , end  , length ,arr){
//      if (start === length){
//         return;
//      }
//      if (end === length) {
//         recurrsion(start+1,start+2,length,arr);
//      }
//      if (end > length) {
//         return;
//      }
//      if (arr[start] === arr[end]) {
//         if (!dup.includes(arr[start])) {
//             dup.push(arr[start]);
//             recurrsion(start+1,start+2,length,arr);
//         }
//      }
//      if (arr[start] !== arr[end]) {
//         recurrsion(start,end+1, length ,arr);
//      }

// }
// let end = Date.now();

// recurrsion(0,1,array.length - 1,array);
// console.log(dup);
// console.log(end - start / 1000);