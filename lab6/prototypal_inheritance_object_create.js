// Prototyple inheritance with Object.create()
let car = {
  wheels : 4,
  manifacturer: undefined,
  speed: 100,
  drive: function(){
    console.log(`I'm driving with ${this.speed}`);
  } 
}

// create ford object by the car prototype. Object.create will set the __proto__ value.
let ford = Object.create(car)

// set ford own properties:
ford.speed = 200;

// check it:
ford.drive();
