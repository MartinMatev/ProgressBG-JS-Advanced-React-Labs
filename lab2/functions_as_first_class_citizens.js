// function one(){
//   return 1;
// }

// function two(){
//   return 2;
// }

// function baz(f, number){
//   return f()**number  
// }

function baz(x){
  return function(y){
    return(x+y)
  }
}

let res = baz(1)(2);
console.log(`res = ${res}`);
