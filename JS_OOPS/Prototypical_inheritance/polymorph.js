function HtmlElement(){
    this.click = function(){
        console.log('Click function..');
    }
}
HtmlElement.prototype.focus = function(){
    console.log('Focus on Element..');
}

// let e = new HtmlElement();
// console.log(e);

function HtmlSelectElement(...args){
    this.item = [];
    if (args) this.item = [...args];
    this.addItem = function(val) {
        this.item.push(val)
    }
    this.removeItem = function(val) {
        this.item = this.item.filter((ele) => {
            return ele != val;
        })
    }
    this.render = function(){
        
        let rend = this.item.map(element => {
            return `\t<item>${element}</item>`
        })
        console.log('<select>');
        rend.forEach(element => {
            console.log(element);
        })
        console.log('</select>');
    }
    
}

HtmlSelectElement.prototype = new HtmlElement();

let se = new HtmlSelectElement(1,2,3,4);
// console.log(se);
se.render();

function HtmlImageElement(url){
    this.URL = url;
    this.render = function() {
        console.log(`<img src = '${this.URL}'/>`);
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.contructor = HtmlImageElement;
let IMG = new HtmlImageElement('https://www.google.com');
IMG.render();
