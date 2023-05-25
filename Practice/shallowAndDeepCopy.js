var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
// console.log("=========Deep Copy========");
// var newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// function sum(...args) {
//     let total
//     if (Array.isArray(args[0])) {
//         total = args[0].reduce((accumul,data) => accumul + data)
//         return total;
//     }
//     total = args.reduce((accumul,data ) => accumul + data);
//     return total; 
// }

// console.log(sum(1,2,3,4));
// console.log(sum([1,2,3,4]));


// const a = {}
// b = {key : "abhi"}
// c = { key : "Abh"}
// a[b] = 1313
// console.log(a);
// console.log(a[b]);
// a[c] = 3030
// console.log(a);
// console.log(a[c]);

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);


// function test() {
//     var fir = 10;
//     var sec = 10;
//     fir++;
//     ++sec;
//     console.log(fir,sec);
// }
// test();

// console.log("b : ",sec=10);
// console.log("a : ",fir);

// var sec=9,fir=8;

function test(o) {
    var i = 0;                      // i is defined throughout function
    if (typeof o == "object") {
        var j = 0;                  // j is defined everywhere, not just block
        for(var k=0; k < 10; k++) { 
            //console.log(k);
        }
        console.log(k);          // k is still defined: prints 10
    }
    console.log(j); // j is defined, but may not be initialized
    console.log(k);             
}
// test(null);

const a = {}
b = [1,2,3]
c = [1,2,3]
a[b] = 1313
console.log(a);
console.log(a[b]);
a[c] = 3030
console.log(a);
console.log(a[c]);
console.log({key:'value'}+ 'hi');


