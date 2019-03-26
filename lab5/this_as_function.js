function outer(){
  
  // TODO: check if 'this' variable is global or local
  console.log(this);

  function inner(){
    console.log(this);
  }

  return {
    'method1': inner
  }
}


let obj = outer();
obj.method1();

// window
// window