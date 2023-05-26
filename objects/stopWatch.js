function StopWatch() {
    this.duration = 0;
    let running = false;

    let start = function() {
        if (running)  console.error("Watch is already start..");
        running = true;
        startTime = Date.now();
    }
    let stop = function() {
        if (!running) console.error("Watch is already stop..");
        stopTime = Date.now();
        this.duration = (stopTime - startTime) / 1000;
        running = false
    }
    this.reset = () => {
        this.duration =  0;
    }

    Object.defineProperty(this,'start',{
        get:function(){return start}
    });
    Object.defineProperty(this,'stop',{
        get:function(){return stop}
    })
}

let watch = new StopWatch();

console.log(watch.duration);
// watch.start();
// watch.start();
// let sum
// for (let i = 0; i < 10000000; i++) {
//      sum = i * 10;
    
// }
// watch.stop();
// console.log(watch.duration);
watch.start();
let sum
for (let i = 0; i < 10000000; i++) {
     sum = i * 10;
    
}
watch.stop();
console.log(watch.duration);