let name1 = {
    firstname : "Abhishek",
    lastName :"Gupta"
};

function printName(age,city) {
    console.log(`${this.firstname} ${this.lastName}.Age is ${age}.city ${city}`);
}

Function.prototype.myBind = function (name,...args){
    if (typeof name !== 'object' && name === null) throw new Error("")
    let Obj = this;
    let params = args.slice(1);
    return function(...args1) {
        // let arguments = [];
        // args.forEach(element => {
        //     arguments.push(element);
        // });
        // args1.forEach(element => {
        //     arguments.push(element);
        // });
        // Obj.call(name,...arguments);
        Obj.apply(name,[...params,...args1]);
    }
}

printName.myBind(name1,4,"Mumbai")();