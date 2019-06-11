function foo(){
  // setTimeout works asyncronous, i.e. does not block that.
  setTimeout(()=>{console.log(`1.`)}, 0);
}

foo();
console.log(`2.`);