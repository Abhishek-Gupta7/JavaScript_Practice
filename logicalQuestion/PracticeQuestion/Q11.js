// Find prime numbers from 1 ....n

let num  = 100;
let prime = [];
for (let i = 2; i <= num; i++) {
    let flag = true;
    for (let j = 2; j <= parseFloat(i / 2); j++) {
            if(i % j === 0){
                flag = false;
                break;
            }
    }
    if (flag) {
        prime.push(i);
    }
}

console.log(prime);