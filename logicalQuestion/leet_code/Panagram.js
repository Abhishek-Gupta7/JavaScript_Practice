function isPangram(str){
    let array = str.split(" ")
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphsArray = alpha.split('');
    let newArray = [];
    array.map(subArray => {
        let element = subArray.split('');
        newArray = [...newArray,element];
    });

    for (let i = 0; i < newArray.length ; i++) {
        
        let element = newArray[i].sort();
        for (let j = 0; j < element.length ; j++) {
            // console.log(alphsArray)
            let index = alphsArray.findIndex((val,i) => {
                    if (val === element[j]) {
                        // console.log(i)
                        return i;
                    }
            });
            console.log(i , 'indexx')
        //    console.log(index, '4323-4-3204-324023-4')
            if ( index != -1) {
                alphsArray.splice(index,1);
                console.log(alphsArray)
            }
            // console.log(alphsArray, '-----') 
        }
    }
    // console.log(alphsArray);
    console.log(alphsArray.length);
    if (alphsArray.length > 0) {
        console.log('NO');
    }else{
        console.log('Yes');
    }
 
  }
  
  let str = "lazy dog"
  isPangram(str)
  

// 'abcdefghijklmnopqrstuvwxyz'.split('').filter(a => { if(!str.includes(a)) return a}).length > 0 ? console.log('Jyada') : console.log('Kam') 
// console.log(r)
// if(r.length > 0) console.log(false)
// else console.log(true) 

//  str2.includes('a' || 'A' && 'b' || 'B' &&'c' || 'C' &&'d' || 'D' &&'e' || 'E' &&'f' || 'F' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&) ? console.log(true) : console.log(false)

// a = 2 
// let s = () => {
//     this.a = 3
// }

// this.a = 5
// console.log(exports)
// s()
// console.log(a)

// module.exports.s = s


// let d = [1,2,4,34,3]

// let e = d.map(c => 0)
// console.log(e)