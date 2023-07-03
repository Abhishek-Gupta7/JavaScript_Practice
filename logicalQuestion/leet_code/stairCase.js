let n = 5;

for (let i = 1; i < n; i++) {
    let str = '';
    for (let j = n; j > 0; j--) {
        if (j <= i) {
            str +='#'
        } else {
            str +=' '
        }   
    }
    console.log(str);
}
