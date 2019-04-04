let obj = {
  id: 1,
  log: function(){
    console.log(this);
  }
}

obj.log(); // 


function foo(param){
  // make this to be obj
  console.log(this);
  console.log(this.id);
  console.log(`param: ${param}`);
}

// function.bind(thisArg[, arg1[, arg2[, ...]]])
let foo1 = foo.bind(obj, 'Maria');
foo1();