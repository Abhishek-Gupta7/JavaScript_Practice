// 10. Code to find even numbers in a list

// let list = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
// let even = [];
// // !st Way 
// list.forEach(element => {
//   if(typeof element === 'number'){
//     if (element % 2 === 0) {
//         even.push(element);
//     }
//   }
// });
// console.log(even);
// Time complexity is O(n)



// 2nd Way
// with out using built-in function
// let list = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
// let evenNumbers = [];
// let count = 0;
// for (let i = 0; i < list.length; i++) {
//     if (typeof list[i] === 'number') {
//         if (list[i] % 2 === 0) {
//             evenNumbers[count] = list[i];
//             count++;
//         }
//     }
// }
// console.log(evenNumbers);
// Time complexity is O(n)


// 3rd Way
let list = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
let evenList = [];
function recursionEven (count , length , list){
    if(count === length) return;
    if (list[count] % 2 === 0){
        evenList.push(list[count]);
    }
    recursionEven(count + 1 , length ,list);
}
recursionEven(0 , list.length - 1 ,list);
console.log(evenList);
