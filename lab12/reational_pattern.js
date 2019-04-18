let obj1 = {};

let obj2_1 = Object.create({});
let obj2_2 = Object.create(null);

let obj3 = Object.assign({});


function ObjectConstructor(){}
let obj4 = new ObjectConstructor();


console.dir(obj1.__proto__);
console.dir(obj2_1.__proto__);
console.dir(obj2_2.__proto__);
console.dir(obj3.__proto__);
console.dir(obj4.__proto__);
