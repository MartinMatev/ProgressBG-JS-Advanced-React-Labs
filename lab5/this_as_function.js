function outer(){  
  let THIS = 5;
  console.log(THIS);

  function inner(){
    console.log(THIS);
  }

  return {
    'method1': inner
  }
}

let THIS = 99;

let obj = outer();
obj.method1();

// window
// window