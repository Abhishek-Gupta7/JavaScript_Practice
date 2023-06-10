// 8. WAP to print Fibonacci series without recursion.

let num = 12;
let fibo = printFibo(num);
console.log(fibo);

function printFibo(num){
    if (!Number(num)) return 'Please enter number...';
    if (num < 2)  return 1;
    let fibo = '0 1 '
    let a = b =  1;
    let temp = 0 ;
    for (let i = 1; i <= num - 2; i++) {
        temp = temp + a;
        fibo = fibo + temp + ' ';
        a = b;
        b = temp
    }
    return fibo;
}

