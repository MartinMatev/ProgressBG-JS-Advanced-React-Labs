function A(){
    this.id=1;   
}

A.staticMethod = function(){
  console.dir(this);
}


let obj = new A();
console.dir(obj);

console.dir(A);
