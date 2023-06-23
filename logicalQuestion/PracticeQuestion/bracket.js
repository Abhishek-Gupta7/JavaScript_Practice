let str = '(( ( () ) ))Helo{}[]';
let closeBracket = ['(' , '[' , '{' , '<'];
let openBracket = [')' , ']' , '}' , '>'];
let closeValue = {
    '(' : ')',
    '[' : ']',
    '{' : '}',
};

function checkBracket(str){
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let brac = str[i];
        if (closeBracket.includes(str[i])) {
            arr.push(str[i])
        }
        if (openBracket.includes(str[i])) {
            let singleCloseBracket = arr.pop();
            if (closeValue[singleCloseBracket] !== str[i]) {
                console.log('Compilation Error');
            }
        }
    }
    return arr;
}
console.log(checkBracket(str));