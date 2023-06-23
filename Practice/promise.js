// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });

// Q2
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

// let promise = job(true);
// promise
//   .then(function (data) {
//     console.log(data); //success
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error); //error
//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data); //Error caught
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("1 Data");
    reject("1 Rejected");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 Data");
    // reject("2 Rejected");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3 Data");
  }, 3000);
});

// Promise.all([
//   p1.catch((error) => {
//     console.log(error);
//   }),
//   p2.catch((error) => {
//     console.log(error);
//   }),
//   p3.catch((error) => {
//     console.log(error);
//   }),
// ])
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => console.log(error));

/**************      Promise.any() ************/
// Any => It takes the value of first fullfil promise. 
Promise.any([
    p1,
    p2.catch((error) => {
      console.log(error);
    }),
    p3.catch((error) => {
      console.log(error);
    }),
  ])
  .then((result) => {
    console.log("Result : ",result);
  })
  .catch((error) => console.log("error : ",error));

  /**************      Promise.race() ************/
// race => It takes the value of first promise
// (whether it is fullfill or rejected)
  // Promise.race([
  //   p1,
  //   p2.catch((error) => {
  //     console.log(error);
  //   }),
  //   p3.catch((error) => {
  //     console.log(error);
  //   }),
  // ])
  // .then((result) => {
  //   console.log("Result : ",result);
  // })
  // .catch((error) => console.log("Error : ",error));





