// let globalScope = 1;
// function localScope() {
//     function innerLocal() {
//         console.log(x); //Refrence ErrorCannot access 'x' before initialization 
//     }
//     innerLocal();
//     let x = 5;
// }
// localScope();

// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }

// var count = 0;
// (function printCount() {
//     if (count === 0 || count === 1 || count === undefined) {
//        var count = 1;
//        console.log("if:",count); //on undefined it prints
//     }
//     console.log("function : ",count);
// })();

// console.log(count);

