function foo_strict(){
  "use strict"
  console.log(`this in foo_strict:`);
  console.dir(this);
}

function foo_unstrict(){  
  console.log(`this in foo_unstrict:`);
  console.dir(this);
}


foo_strict();
foo_unstrict();


