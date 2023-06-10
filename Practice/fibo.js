function  fibo(num){
    if (num ===  0) return -1;
    if (num ===  1) return 0;
    if (num ===  2) return '0 1';
    let a = 0;
    let b = 1;
    let str = a + ' ' + b;

    for(let i = 3 ; i <= num ; i++){
        let temp = a + b;
        str += ' ' + temp;
        a = b;
        b = temp;
    }

    return str;
}

console.log(fibo(5));

// function recFibo(n,i = 2){
//     if (n < 2) return 1;
//     if (i > n) return;
//     return  
// }

// function fibo(n) { 
        
//     if (n < 2)
//         return 1;
//     else   return fibo(n - 2) + fibo(n - 1);
// }

// console.log(fibo(10));

function fibo1(a , temp , i , num){
    if (i >= num) return temp;
    if (num < 2) return 1;
    return  1 + fibo1(temp , temp + a, i + 1 , num);
}

console.log(fibo1(1 , 1 , 2 , 7 ) - 1);