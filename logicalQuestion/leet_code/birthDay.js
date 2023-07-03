// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. 
// Count how many candles are tallest.

let arr = [0,0,0,0];
let max = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (max == arr[i] && max !== 0) {
        count++;
    }
    if (max < arr[i]) {
        max = arr[i];
        count = 1;
    }
}

console.log(count);