// const person ={
//     name : 'Abhi',
//     walk(){
//         console.log(this);
//     }
// };

// person.walk();
// const walk = person.walk.bind(person.name);
// walk();

// const address = {
//     street :'Kurla',
//     city:'Mumbai',
//     country:'India'
// };

// const {city:c} = address;
// console.log(c);  //Mumbai

class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(this.name," Walk!");
    }
}

const person = new Person('Abhi');
person.name = 'Ab';
person.walk();

