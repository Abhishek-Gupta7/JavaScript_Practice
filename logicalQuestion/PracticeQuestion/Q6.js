// 6. WAP to find the given string is Palindrome or not

let str = 'laal';

let newStr = reverseString(str);
if (str === newStr) {
    console.log('Palindrome');
}else{
    console.log('Not Palindrome');
}


function reverseString(str){
    if (typeof str === 'string') {
        let reverseStr = ''; 
        for (let i = str.length - 1; i >= 0 ; i--) {
            reverseStr += str[i];
        }
        return reverseStr;
    }
}

// Time Complexity is O(n)