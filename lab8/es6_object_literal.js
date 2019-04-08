function shorthandPropertyNamesDemo(){
  let userName = 'pesho';
  let userAge = 23;

  let p1 = {userName, userAge};


  console.log(p1);
}

function propertyES5(){
  let userName = 'pesho';
  let userAge = 23;

  let p1 = {userName:userName, userAge:userAge};


  console.log(p1);
}
function Person(name, age){
  return {name, age}  
}

// let pesho = Person('Petar', 23);
// console.log(pesho);

shorthandPropertyNamesDemo();
propertyES5();
