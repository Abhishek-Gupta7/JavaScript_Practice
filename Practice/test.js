// async function test() {
//     console.log(1);
    
//     setTimeout(() => {
//         console.log(2);
//         print();
//     }, 1000);

//     function print() {
//         console.log(3);
//     }
    
// }

// // test();

// async function test2() {
//     console.log(1);

//         setTimeout(() => {
//             console.log(2);
//         }, 1000)
    
//     // function print() {
//     //     console.log(3);
//     // }
    
// }

// // test2();

// console.log(typeof false);
// console.log(typeof null);

// if (undefined) {
//     console.log("jk");
// }

// console.log(false == null);




// function numberTest(num) {
//     if (num > 10) return true;
// }
// console.log(numberTest(10));

// if(numberTest(10)){
//     console.log("hiu");
// }

// function add(i){
//     console.log( i + 5 == 6);
// }

// // add();

// const fs = require('fs');

// setTimeout(() => {
//     console.log("Time 0");
// }, 0);
// setTimeout(() => {
//     console.log("Immediate");
// });

// fs.readFile('index.js',(error,data) =>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(data);
//         setTimeout(() => {
//             console.log("File Immediate");
//         });
//         setTimeout(() => {
//             console.log("File 0");
//         }, 0);
//     }

// })
// console.log("Hello");

const form  = {
    name : "Abhi",
    age:34,
    address:undefined,
    phone:undefined
}
console.log(Object.keys(form).length);
// let data = {};
// for (const iterator in form) {
//     console.log(form[iterator]);
//     if (form[iterator]) {
//         let key1 = iterator;
//         let value= form[iterator];
//         let newobj = {key:value}
//         data = {...newobj}
//     }
// }

// console.log(data);


// console.log(arguments);
// console.log(require('module').wrap());