const myModule = {
  pi:3.14,
  circleArea: (r) => myModule.pi*(r**2),
  foo: function(){
    console.log(`this.pi in foo: ${this.pi}`);
  }
}




console.log(myModule.circleArea(1));
myModule.foo();