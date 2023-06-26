// let object = undefined;
// let object = {"y": 1,"x": 2};
let object = {"a":"str","b":-12,"c":true,"d":null};
// let object = {"key":{"a":1,"b":[{"name":"abhi","bol":true},null,"Hello"]}};

let objectType = ['string',null,'number','boolean','object'];
let primitiveType = ['string',null,'number','boolean']
// console.log();
let count = 1;
function convertObjectToString(object1) {
    if(object1 === null || object1 === undefined){
        return object1 === null ? null : undefined;
    }else{
        if (Object.keys(object1).length === 0) {
            if (primitiveType.includes(typeof object1)) {
                return object1;
            }
        return '{}';
        }
    }

    let str = '{'
    for (const iterator of Object.keys(object1)) {
        // console.log(iterator);
        let value = object1[iterator];
        // console.log(typeof value);
        if (objectType.includes(typeof object1[iterator])) {
            if (Array.isArray(value)) {
                let result = arrayOperation(value);
                // console.log(result);
                str = str + `"${iterator}":${result} `
                continue;
            }
            if (typeof value === 'string') {
                let result = stringOperation(value);
                if (!result)  continue;
                str = str + `"${iterator}":${result} `
            }
            if (typeof value === 'number') {
                str = str + `"${iterator}":${value} `
            }
            if (typeof value === 'object' && value === null) {
                str = str + `"${iterator}":${value} `
            }
            if (typeof value === 'boolean') {
                str = str + `"${iterator}":${value} `
            }
            if (typeof value === 'object' && value != null) {
                let val = convertObjectToString(value);
                str = str + `"${iterator}":${typeof val === 'string' ? `${val}`: val} `;
                continue;                
            }
        }
    }
    return str.trim().replace(' ',',') + '}';
}
let strObj = convertObjectToString(object);
console.log("final:",strObj);

function stringOperation(value) {
    if (typeof value === 'string') {
        if (value.trim().length < 1) {
            return false;
        };
    }
    return `"${value}"`
}

function arrayOperation(value) {
    console.log("arrayOperation");
    let arrayStr = '['; 
    value.forEach((element) => {
            if (typeof element === 'object' && element != null) {
                let val = convertObjectToString(element);
                arrayStr = arrayStr + val + ' ';                
            }
            else{
                arrayStr = arrayStr + element + ' ';
            }
        })
        arrayStr = arrayStr.trim();
        return arrayStr +']';
}



// let o = []
// console.log(Object.keys(o).length);
// console.log(objectType.includes(typeof 76));
// console.log(objectType.includes(typeof true));
// console.log(objectType.includes(typeof object1));
// console.log(objectType.includes(typeof "Abh"));
// console.log(objectType.includes(typeof [1,2,3]));
        // if (count < 3) {
            // str = str + `"${iterator}":${object1[iterator]} `;
            // console.log(str);
            // count = count + 1;
        // }