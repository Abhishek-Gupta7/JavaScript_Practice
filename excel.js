function exam() {
    veg = 'palak'
    fruit = 'mango' //ReferenceError: Cannot access 'fruit' before initialization
    console.log(veg);
    console.log(fruit);

    let fruit = 'apple';
    var veg = 'paneer';
}

exam();