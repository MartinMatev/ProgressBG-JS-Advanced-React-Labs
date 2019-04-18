let foo = function(name){
  console.log(`1. name: ${name}`);


  foo = function(){
    console.log(`I'm the new foo function`);
  }
}


foo('Maria'); 
foo('Pesho'); // undefined
