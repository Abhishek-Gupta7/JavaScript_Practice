function mixin(target,...sources){
    Object.assign(target,...sources);
}

const canEat = {
    eat : function(){
        console.log('Eating..');
    },
    drink : function(){
        console.log('Drink..');
    }
}

const canWalk = {
    walk : function () {
        console.log('walking...');
    }
}

const canSwim = {
    swim : function(){
        console.log('Swim...');
    }
}

function Person(){

}

mixin(Person.prototype,canEat,canWalk);
let p = new Person();
console.log(p);