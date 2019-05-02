function Car(name, speed) {
  // check for existing instance
  if (typeof Car.instance === "object"){
    return Car.instance;
  }

  // set instance properties
  this.name = name || 'Car';
  this.speed = speed || 180;

  // cache the instance
  Car.instance = this;
}

// lets try to create 2 instances
var car1 = new Car('car1', 200);
var car2 = new Car('car2', 300);

// test if we have ONLY ONE instance:
console.log(car1 === car2);

console.log(`car2 speed : ${car2.speed}`);