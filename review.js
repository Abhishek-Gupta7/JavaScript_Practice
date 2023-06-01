// for(var i=0 ; i<10 ; i++);{
//     console.log(i)
// }

// console.log(undefined + 7878 == 7878)

// function factorial(n){
//     if (!NaN(n)) return 'Please enter number..'
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// let result = factorial(5);
// console.log(result);

// console.log(null -1 + "")

// async function test() {
//     console.log(1);
//     console.log(await 1);
//     console.log(3);
// }

// console.log(test());

async function test() {
  console.log(1);
  await setTimeout(() => {
    console.log(2);
  }, 1000);
  console.log(3);
}

// console.log(test());

// async function test() {
//     console.log(1);
//     let a = await 1;
//     console.log(a);
//     console.log(3);
// }

// console.log(test());
