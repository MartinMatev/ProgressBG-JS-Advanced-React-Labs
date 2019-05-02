// The Mixin - exports functionalities for vehicles
var Mixin = function (){};
Mixin.prototype = {
    drive(){console.log( "Driving" )},
    ride(){console.log( "Riding" )},
    stop(){console.log( "Stopping" )},
    purr(){console.log("Purr rrr rrpp prr ppprrrr")},
};

// some constructor, which can borrow methods from Mixin
var Bike = function ( settings ) {
    this.model = settings.model || "unknown";
};
var Car = function ( settings ) {
    this.model = settings.model || "unknown";
};
Car.prototype.drive = Mixin.prototype.drive;

// helper function to extend an object by Mixin:
// augment( Constructor, Mixin, [methodsArray] );
function augment( receiver, giver, methodsArray ){
    // Bike.prototype.ride = Mixin.prototype.ride
    // with a list of specified methods:
    if ( methodsArray ){
        methodsArray.forEach(m => {
            receiver.prototype[m] = giver.prototype[m];
        });
    }
    // with all methods
    else {
        for ( let methodName in giver.prototype ) {
            if ( giver.prototype.hasOwnProperty(methodName) && !receiver.prototype.hasOwnProperty(methodName) ) {
                receiver.prototype[methodName] = giver.prototype[methodName];
            }
        }
    }
}

// // Augment the Bike constructor with some of the Mixin methods:
augment( Bike, Mixin );

// // Augment the Car constructor with all of the Mixin methods:
augment( Car, Mixin, ['drive']);

// make some objects
var ford = new Car({ model: "Ford" });
ford.drive();

var harley = new Bike({ model: "Harley Davidson" });
console.dir(harley);
harley.purr();
harley.drive();