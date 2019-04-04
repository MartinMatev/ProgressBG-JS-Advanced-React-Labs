function Constructor(id) {
  this.id = id;
  this.saidHello = 0;

  __sayHello = function() {
    this.saidHello++;
  };
  this.sayHello = function() {
    __sayHello();
    console.log(`this.saidHello: ${this.saidHello}`);
  };
}

// function.apply(thisArg, [argsArray])
function.call(thisArg, arg1, arg2, ...)
// 

var obj1 = new Constructor(1);
obj1.sayHello();
obj1.sayHello(); 
console.log(`global.saidHello: ${global.saidHello}`);
