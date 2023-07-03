 
 
let arr = [7,69 ,2 ,221 ,8974];
let array = arr.sort((a,b) =>{
    if (a > b) {
        return 1;
    }
    return -1;
 })
let minSum = 0;
let maxSum = 0;
 for (let index = 0; index < array.length; index++) {
        if (index <= array.length - 2) {
            console.log(index);
            minSum += array[index];
        }
        if (index > 0) {
            console.log('max',index);
            maxSum += array[index];
        }
    
 }
 console.log(minSum+' '+maxSum);
