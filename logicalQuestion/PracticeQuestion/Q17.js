// 17. find frequency of each and every character in a string. 
// Input: Engineer Output : e3n2g1i1r1

// let input = 'Engineer'.toLowerCase();
let input = 'Engineer'.toLowerCase();
let arr = [];
let str = '';
for (let i = 0; i < input.length; i++) {
    let count = 1;
    if (!arr.includes(input[i])) {
        arr.push(input[i]);
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                count++;
            }
        }
        str = str + input[i] + count;
    }
}
console.log(str);

// Time Complexity is O(n^2).



