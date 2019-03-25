function sum(){
  console.dir(arguments);
  let sum=0; 

  for(let arg of arguments){
    sum += arg
  }

  return sum;
}

console.log(sum(2,3));
console.log(sum(2,3,4));