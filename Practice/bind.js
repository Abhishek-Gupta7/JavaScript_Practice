let person = {
    firstName:"Amy",
    lastName:"Amul",
    printName(age){
        console.log(`${this.firstName} ${this.lastName} is \
${age} ${age = 1 ? 'year' : 'Years'} old.`);
    }
};


function detail(age) {
    console.log(`${this.firstName} ${this.lastName} is \
${age} ${age = 1 ? 'year' : 'Years'} old.`);
}

//  detail.bind(person,9)();
let ravi = {
    firstName:"Ravi",
    lastName:'singh'
}

person.printName.bind(ravi,19)(10);


function add(x  , y) {
    console.log(x + y);
}


let sum = add.bind();
sum(20,6);