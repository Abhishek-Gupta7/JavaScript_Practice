function StopWatch() {
    this.duration = 0;
    let running = false;
    let startTime,stopTime;
    // let start = function() {
    //     if (running)  console.error("Watch is already start..");
    //     running = true;
    //     startTime = Date.now();
    // }
    // let stop = function() {
    //     if (!running) console.error("Watch is already stop..");
    //     stopTime = Date.now();
    //     this.duration = (stopTime - startTime) / 1000;
    //     running = false
    // }
    this.reset = () => {
        this.duration =  0;
    }

    Object.defineProperty(this,'running',{
        get : function(){return running},
        set: function(val) {running = val}
    });
    Object.defineProperty(this,'startTime',{
        get : function(){return startTime},
        set: function(val) {startTime = val}
    });
    Object.defineProperty(this,'stopTime',{
        get : function(){return stopTime},
        set: function(val) {stopTime = val}
    });
}


StopWatch.prototype.start = function(){
    if (this.running)  console.error("Watch is already start..");
    this.running = true;
    this.startTime = Date.now();
}

StopWatch.prototype.stop = function(){
    if (!this.running) console.error("Watch is already stop..");
        this.stopTime = Date.now();
        this.duration = (this.stopTime - this.startTime) / 1000;
        this.running = false
}

StopWatch.prototype.reset = function(){
    this.duration =  0;
}
let watch = new StopWatch();
let sw = new StopWatch();
