var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("I'm " + this.name);
    };
    return Person;
}());
var p1 = new Person('Pesho', 23);
