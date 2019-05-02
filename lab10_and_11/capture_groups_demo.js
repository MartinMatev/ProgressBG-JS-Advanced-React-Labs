// var re = /\b(straw|rasp)?(berries)/;
// var strings = [
//   'Icecream with strawhfdsfjdshfjdshf? No!',
//   'Icecream with strawberries? Yes!',
//   'Icecream with raspberries? Yes!',
//   'Icecream with rasberries? No!',
//   'Icecream with berries? Yes!',
// ]

let userMail = 'iva@gmail.com';
let re = /((\w+)?@\w+)\.\w{2,3}/


console.dir(userMail.match(re)[1]);
console.dir(userMail.match(re)[2]);

