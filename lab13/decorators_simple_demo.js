let logger = function(msg){
  return function(){
    console.log(`${msg}`);
  }
}

let loggerDecorator = function(f){  
  return function(x){
    let d = new Date();
    let timestamp = `${d.getHours()}.${d.getMinutes()+1}.${d.getSeconds()}`;    

    f(x + `[${timestamp}]`)();
    // console.log();
  }
}

// f()(); //curring
// (function(){})(); //IIFE

//TODO: throw new ERR_INVALID_CALLBACK();
setTimeout(logger('Hello 1'), 500);
// 'Hello'

// change logger to log the time of calling
// @loggerDecorator
logger = loggerDecorator(logger);

setTimeout(logger('Hello 2'), 1000);
// 20.30.58