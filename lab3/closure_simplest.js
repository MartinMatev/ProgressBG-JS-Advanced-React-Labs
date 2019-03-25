function outer(){
  var x = 1;

  function inner(){
    console.log(`I'm the inner function`);
    console.log(`x = ${x}`);
  }

  return inner;
}

var foo = outer()
foo();

// infact, we've executed the inner function above
// but because of the "closure", it has it local scope values in it:
console.log(`foo: ${foo}`);