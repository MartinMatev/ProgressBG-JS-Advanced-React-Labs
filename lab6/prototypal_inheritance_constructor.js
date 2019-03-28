// Prototyple inheritance for constructors
function Car(){
  this.wheels = 4;
  this.manifacturer = undefined;
  this.speed = 100;  
}
Car.prototype.drive =  function(){
  console.log(`I'm driving with ${this.speed}`);
} 

function Ford(){
  this.manifacturer = undefined;
  this.speed = 200;
}

// make Ford object to inherit all properties of Car:
Ford.prototype = Object.create(Car.prototype);

// create the objects:
let car = new Car();
let ford = new Ford()

// test it:
ford.drive();
