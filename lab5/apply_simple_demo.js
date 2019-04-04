let obj = {
  id: 1,
  log: function(){
    console.log(this);
  }
}

obj.log(); // 


function foo(x,y){
  // make this to be obj
  console.log(`x = ${x}, y = ${y}`);
  console.log(this);
  console.log(this.id);
}

// function.apply(thisArg, [argsArray])
foo.apply(obj, [2,3]);

// function.call(thisArg, arg1, arg2, ...)
foo.call(obj, 2,3 );