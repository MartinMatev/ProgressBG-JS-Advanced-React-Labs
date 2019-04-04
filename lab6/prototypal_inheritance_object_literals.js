// Prototyple inheritance for object literals:
let car = {
  wheels : 4,
  manifacturer: undefined,
  speed: 100,
  drive: function(){
    console.log(`I'm driving with ${this.speed}`);
  } 
}

let ford = {
  manifacturer: 'Ford',
  speed: 200
}

// ford will inherits from car
ford.__proto__ = car;

// let's check:
ford.drive()
