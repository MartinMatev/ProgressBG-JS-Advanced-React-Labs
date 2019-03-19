function outer(){
  var x = 1;

  function inner(){
    console.log(`I'm the inner function`);
    console.log(`x = ${x}`);
  }

  return inner;
}

var foo = outer()
console.log(`foo: ${foo}`);