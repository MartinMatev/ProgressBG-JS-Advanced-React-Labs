function Constructor(id) {
  this.id = id;
  this.saidHello = 0;

  __sayHello = function() {
    this.saidHello++;
  };
  this.sayHello = function() {
    __sayHello.apply(this);
    // __sayHello.call(this);
    console.log(`this.saidHello: ${this.saidHello}`);
  };
}


var obj1 = new Constructor(1);
obj1.sayHello();
obj1.sayHello(); 
console.log(`global.saidHello: ${global.saidHello}`);
