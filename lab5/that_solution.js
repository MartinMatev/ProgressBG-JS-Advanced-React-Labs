function Constructor(id) {
  this.id = id;
  this.saidHello = 0;

  __sayHello = function() {
    this.saidHello++;
    // here "this" is window object!!!
  };
  this.sayHello = function() {
    console.log(this);
    __sayHello();
    console.log(`Oh, hello dear. I'm obj ${id}`);
    console.log(`I said hello ${this.saidHello} times`);
  };
}

var obj1 = new Constructor(1);
obj1.sayHello();
obj1.sayHello();
