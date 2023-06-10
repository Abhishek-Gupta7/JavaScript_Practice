// 4. Find the reverse of the string

let fullName = 'Abhishek Gupta';

// split each word from sentence
let separateName = fullName.split(' ');
console.log(separateName);
let reverseName = '';

// Passing each word to reverseString function to reverse the string
for (let value of separateName) {
    reverseName += reverseString(value);
}
console.log(reverseName);


// Function to reverse string
function reverseString(name){
    if (typeof name === 'string') {
        let reverseName = '';
    for (let i = name.length - 1; i >= 0; i--) {
        reverseName = reverseName + name[i];
    }
    return reverseName + ' ';
    }
    return 'throw new Error("Invalid String")'
}

// Time Complexity is O(n^2);