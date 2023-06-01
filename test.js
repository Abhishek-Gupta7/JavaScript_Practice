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

f3();
async function test() {
    console.log("test",1); 
    const a =   await 10;
    console.log("test",a);
    console.log("test",3);
    return "hi hello"
    await 1
}
// test()
console.log(test());

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