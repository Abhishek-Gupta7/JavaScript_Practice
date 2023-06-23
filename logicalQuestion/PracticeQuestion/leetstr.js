let str = "PAYPALISHIRING";
let numRows = 4;
var arr = new Array(numRows);
for (let i = 0; i < str.length - 1; i++) {
    arr[i] = [];
}
 
let i = 0 ; 
let col = 0;
let count = 0;
let changeflag = false

convert(str,numRows);
function convert(str , numRows) {

    if (typeof str === 'string') {
        while(count < str.length){
            if (!changeflag) {
                arr[i][col] = str[count];
                count = 1 + count;
                i = i + 1;
                if (i === numRows) {
                    i--;
                    changeflag = !changeflag;
                    col++;
                }
            }else{
                i--;
                arr[i][col] = str[count];
                count++;
                col++
                if (i === 1) {
                    i = 0;
                    changeflag = !changeflag;
                }
            }
            
        }
    }
}
console.log(arr);


