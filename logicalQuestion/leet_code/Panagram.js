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
            let index = -1;
            for (let k = 0; k < alphsArray.length; k++) {
                    if (alphsArray[k] === element[j]) {
                        index = k; 
                        break; 
                    }                       
            }
            if ( index != -1) {
                alphsArray.splice(index,1);
            } 
        }
    }
    console.log(alphsArray);
    console.log(alphsArray.length);
    if (alphsArray.length > 0) {
        console.log('NO');
    }else{
        console.log('Yes');
    }
 
  }
  
  let str = "the quick brown fox jump over the lazy dog"
  isPangram(str)
  

'abcdefghijklmnopqrstuvwxyz'.split('').filter(a => { if(!str.includes(a)) return a}).length > 0 ? console.log('Jyada') : console.log('Kam') 
// console.log(r)
// if(r.length > 0) console.log(false)
// else console.log(true) 

//  str2.includes('a' || 'A' && 'b' || 'B' &&'c' || 'C' &&'d' || 'D' &&'e' || 'E' &&'f' || 'F' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&'a' || 'A' &&) ? console.log(true) : console.log(false)