// for(var i=0; i<10 ; i++);{
//     console.log(i)
// }


// async function test() {
//     console.log(1);
//     console.log(await 1);
//     console.log(3);
// }

async function f3() {
    console.log("f3",1);
    const y = await 20;
    console.log("f3",y); // 20

    const obj = {};
    console.log((await obj) === obj); // true
    console.log("f3",3);
}

// f3();
async function test() {
    console.log("test",1); 
    const a =   await 10;
    console.log("test",a);
    console.log("test",3);
    return "hi hello"
    await 1
}
// test()
// console.log(test());

// function foo(name) {
//     return new Promise((resolve) => {
//     console.log(name, "start");
//     console.log(name, "middle");
//     console.log(name, "end");
//     resolve();
//     });
// }

// foo("First");
// foo("Second");

async function foo(name) {
    console.log(name, "start");
    await console.log(name, "middle");
    console.log(name, "end");
  }
  
//   foo("First");
//   foo("Second");


// function xyz() {
//     console.log(a);  //undefined
//     var a = 101;
//     console.log(b); //ReferenceError: Cannot access 'b' before initialization
//     let b = 40;
// }
// xyz();
// let name1 = 'Abhi'
// let rev = name1.slice(name1.length - 1 , 1);
// console.log(rev);
// console.log(typeof (4 + ''));   //string 
// console.log(typeof 4 + '');     //number

// let num1 = '20';
// let num2 = '30';

// console.log(++num1 + ++num2);
// let ar1 = [1 , 2, 3];
// let ar2  = [ 4 , 5 , 6];
// console.log(ar1 +r2);    //1,2,34,5,6
let arr = [1 , 2 , 3 , 4 , 5];
let arr1 = ['a' , 'b' , 'c'];
let newArr = [0].concat(arr,arr1);
console.log(newArr);