function outer(){
  let x = 5;

  function inner(){    
    let x = 2;
    console.log(`x = ${x}`);
  }
  inner();

  console.log(` x = ${x}`);
}

outer()