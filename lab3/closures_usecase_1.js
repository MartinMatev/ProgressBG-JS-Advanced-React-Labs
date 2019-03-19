var cats = [];


// TODO: not working as expected
(function(){
  var i;
  for (i = 0; i < 3; i++) {
      cats[i] = function (){
        console.log(`1. Cat ${i} is ready!`);
      }
  }
})()

// cats[0] = code<function(){
//         console.log(`Cat 0 is ready!`);
//     }>


console.log(`2. cats[0]: ${cats[0]}`);


cats[0](); //Cat 3 is ready!
cats[1](); //Cat 3 is ready!
cats[2](); //Cat 3 is ready!

