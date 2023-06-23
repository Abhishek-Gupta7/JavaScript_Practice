// 2. WAP to reverse an integer without converting it to a string, without using 
// any builtin methods.

let num = 12345;


let reverseNum = reverseNumber(num);
console.log(reverseNum);

function reverseNumber(num){
    if (!Number(num)) return "Please enter number...";
    let reverseNum = 0;
    while(num != 0){
        let lastDigit = num % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        num =  parseInt(num / 10);
    }
    return reverseNum;
}
// Time Complexity is O(n)

// 2. Swap Values without using any variable a=10, b=12

let a = 10;
let b = 12;

a = a + b;  //22
b = a - b;  //10
a = a - b;  //12
console.log(`a : ${a} , b : ${b}`);
