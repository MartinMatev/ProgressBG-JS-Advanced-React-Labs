"use strict";
var objFactory = function(name){
  // private members
  var name = name;
  
  // public
  var obj = {
    // sayName: () => console.log(`I'm object: ${name}`),
    sayName: function(){
      console.log(`I'm object: ${name}`)
    }
  };

  return obj;
}



var obj1 = objFactory('Object 1');
obj1.sayName();
console.log(`obj1.name: ${obj1.name}`);
// I'm object: Object 1
// obj1.name: undefined