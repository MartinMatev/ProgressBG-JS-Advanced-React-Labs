function sum(){
  console.dir(`arguments: ${arguments}`);
  let sum=0; 

  for(let arg of arguments){
    sum += arg
  }

  console.log(sum)
}


sum(2,3)    // 5
sum(2,3,4)  //9