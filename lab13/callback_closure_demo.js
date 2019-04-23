let logger = function(msg){
  return function(){
    console.log(`${msg}`);
  }
}
setTimeout(logger('Hi'), 1000)

// with anonymous callbacks
setTimeout( (function(msg){
  return function(){
    console.log(`${msg}`);
  }
})('hello'), 1000);


let f = function(msg){
  console.log(`msg : ${msg}`);
};