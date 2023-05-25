let num = 12;
checkNumber(num, (res) => {
  console.log("res :", res);
});

function checkNumber(num, callBack) {
  let n = num;
  setTimeout(() => {
    if (n > 10) {
      //callBack(console.log("success!"));
      callBack({ status: "Success" });
    } else {
      console.log(n, "Failure");
    }
  }, 2000);
}

// async function checkNum(num , weather) {
//     let res1 = new Promise((resolve) => {
//         setTimeout(() => {
//             if (num > 10) {
//                 resolve("Success!");
//                 // console.log("Success!");
//             }else{
//                 resolve("Failure!");
//             }
//         }, 2000);
//     });

//     let weatherReport = new Promise((resolve) => {
//         setTimeout(() => {
//             if (weather === "Delhi") {
//                 resolve("22 Deg");
//                 // console.log("Success!");
//             }else{
//                 resolve("32 Deg");
//             }
//         }, 5000);
//     });

//     let x1 = await res1;
//     console.log("Succes or Failure : " + x1);
//     let x2 = await weatherReport;
//     console.log("Weather Report  : " + x2)
//     return [x1 , x2];
// }

// async function display() {
//     // const result = checkNum(19);
//     // console.log(result.then((r)=>console.log(r)));

//     const result = checkNum(19 );
//     console.log(result.then((value)=>{console.log(value)}));

// }

// display();

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);

// }

var a = 1;
a1();
b();
console.log("var a : " + a);

function a1() {
  var a = 10;
  console.log("a1 :" + a);
}
function b() {
  var b = 20;
  console.log("b : " + b);
}

console.log("Hello");
setTimeout(() => {
  console.log("he ");
}, 1000);

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
