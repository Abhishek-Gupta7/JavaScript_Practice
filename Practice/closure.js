// function x(func) {
//     console.log("Enter X func");
//     var val = 12;
//     var a = func
//     a(val);
//     console.log(a);
// }

// x(function (val) {
//     //let val = 10;
//     console.log(val);
// });

// console.log("hi");

let multiply = function mul(x , y) {
    // x = 5
    // y = 6
    console.log("x : ", x);
    console.log("y : ", y)
    console.log(x * y);    
}

let multiplyByTwo = multiply.bind(this ,10 );
// multiplyByTwo(2 , 4);
            // ******** Addition of two Array ****
// let arr1 = [1 , 2 , 3 , 4 , 5 , 6 ,7];
// let arr2 = [1 , 2 , 3 , 4 , 5 ];
// let limit;

// if (arr1.length > arr2.length) {
//     limit = arr1.length;
// } else {
//     limit = arr2.length;
// }

// function sumArray(a1 , a2 , size) {
//     let  newArray = [];
//     for (let index = 0; index < limit; index++) {
//           newArray.push(a1[index] + a2[index]); 
        
//     }
//     console.log(newArray);
// }
// sumArray(arr1 , arr2 , limit);
 
                     // ***** Reverse Of Name ********* //
// let str = "Abhishek Gupta";
// let arr = str.split(" ");
// console.log(arr);

// function reverseName(name) {
//     for (let index = 0; index < name.length; index++) {
//         const element = name[index];
//         console.log("Actual Name : ",element);
//         reverseProcess(element);
//     }
// }
// reverseName(arr);

// function reverseProcess(singleName) {
//     let revName = "";
//     for (let index = 0; index < singleName.length; index++) {
//        revName = singleName[index] + revName ;
//     }
//     console.log("Reverse is : ",revName);
// }

// let obj = {
//     a : 2,
//     b : 4
// };

// for (const key in obj) {
//     console.log(obj[key]);
// }
// for (const iterator of Object.keys(obj)) {
//     console.log(obj[iterator]);
// }

// function chan(obj1) {
    
//     for (const key in obj1) {
//         obj1[key] = 2;
//         console.log("Change : ",obj1);
//     }
    
// }
// chan(obj);
// console.log(obj);

                /********             IQ       *********/

// let addSix = (num1) => {
//     return function (num2){
//         return num1 + num2;
//     }
// };

// let result  = addSix(6);
// console.log(result(10));
// console.log(result(20));

                /********             For time optimaztion      *********/

function find() {
    let array = [];
    for (let i = 0; i < 100000; i++) {
            array [i] = i * i;
    }
    return function(index) {
        console.log("return",array[index]);
    }
}

// let findMethod = find();
// findMethod();
// console.time("5");
// findMethod(5);
// console.timeEnd("5");
// console.time("15");
// findMethod(15);
// console.timeEnd("15")


// Closure Problem to increase counter

function counter () {
    let count = 0;
    return ()=>{
        console.log(`Function call ${++count} time..`);
    }
}

let call = counter();
// call();
// call();
// call();
// call();
// let obj = {
//     name : 'ajnj',
//     age:87
// }

// let arr = [2,3,'shh',{jduh:"nkjnk"}]
// console.log(`Hi see ${JSON.stringify(obj)} let see ${arr}`);
// let a = 1
// let b = 2
// let obj = {
//     key :"value"
// }
// console.log(Number(""+a));
// console.log(""+a == b);
// console.log(toPrimitive(obj));
// let x;
// if (x === 'undefined') {
//     console.log("undefined");
// } else {
//     console.log("string");
// }

const thenable = {
    then1: (resolve) => {
    setTimeout(() => resolve(2), 100);
    },
    then: (resolve) => {
        setTimeout(() => resolve(10), 1000);
        },
    draw: function(){
        return "Drawing..."
    }
};

async function start () {
    const value = await thenable.draw();
    console.log(value);
}
// start();

let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hi") 
    }, 1000)
})

pr.then((res) => {
    console.log(res);
    return "haha"
})
.catch((err) => {
    console.log(err);
})
.finally((res) => {
    console.log("Finally",res);
})
.then(() => {
    console.log("After finally then");
});