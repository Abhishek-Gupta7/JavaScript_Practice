// The first ten characters consist of the phone number of passengers.[0,9]
// The next character denotes the gender of the person.[10]
// The following two characters are used to indicate the age of the person.[11,12]
// The last two characters determine the seat allotted to that person.[13,14]

// let details = ["7868190130M7522","5303914400F9211","9273338290F4010"];
let details = ["1313579440F2036","2921522980M5644"];
function countSeniors(details) {
    let count = 0;
    if(details instanceof Array){
            details.forEach(element => {
                let age = +(element[11] + element[12]);
                if (age > 60) {
                    count++;
                }
            });
    }
    return count;
}
let result = countSeniors(details);
console.log(result);
