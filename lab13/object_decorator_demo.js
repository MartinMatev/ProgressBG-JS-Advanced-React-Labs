// The constructor to decorate
function Laptop() {
  this.price = function() { return 1000; };
  this.screenSize = function () { return 13; };
}

// Decorators
function memory( laptop ) {
  let p = laptop.price();
  laptop.price = function() {
    return p + 75;
  };
}
function ssd( laptop ) {
  let p = laptop.price();
  laptop.price = function() {
    return p + 125;
  };
}

// usage
var thinkPad = new Laptop();
console.log(thinkPad.price());

memory( thinkPad );
ssd( thinkPad );

console.log( thinkPad.price() );