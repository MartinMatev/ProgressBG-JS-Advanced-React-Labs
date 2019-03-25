let foo = function(x){  
  
  x = x+1;
  console.log(`x in foo ${x}`);

  if(x<5){
    foo(x);
  }  
}

var x = 1;
foo(x);
console.log(`x = ${x}`); // 1
