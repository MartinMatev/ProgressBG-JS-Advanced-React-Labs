function carFactory(name, speed) {
  // check for existing instance
  if (typeof carFactory.instance === "object"){
    return carFactory.instance;
  }

  // set instance properties
  let obj = {};
  obj.name = name || 'carFactory';
  obj.speed = speed || 180;  

  // cache the instance with static property
  carFactory.instance = obj;

  return obj;
}

// lets try to create 2 instances
var car1 = carFactory('car1', 200);
var car2 = carFactory('car2', 300);

// test if we have ONLY ONE instance:
console.log(car1 === car2);