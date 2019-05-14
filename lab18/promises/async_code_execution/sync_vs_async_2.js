function one(){
  // console.time('one');
  timeConsumingCalc(1*10000);
  console.log(`one`); 
  // console.timeEnd('one');
  printNow();
}
function two(){
  // console.time('two');
  timeConsumingCalc(200*100000);
  console.log(`two`); 
  // console.timeEnd('two');
  printNow();
}
function three(){
  // console.time('three');
  timeConsumingCalc(30*100000);
  console.log(`three`); 
  // console.timeEnd('three');
  printNow();
}
function four(){
  // console.time('four');
  timeConsumingCalc(4*100000);
  console.log(`four`); 
  // console.timeEnd('four');
  printNow();
}
function waitAsync(){
  // console.time('waitAsync');
  setTimeout(()=>{
    timeConsumingCalc();
    console.log(`waitAsync`);
    printNow();
  }, 3000)
  // console.timeEnd('waitAsync');
  
}
function timeConsumingCalc(count){  
  for(let i=0; i<count; i++){
    i**i;
  }
}

function printNow(){
  let now = new Date();
  console.log(`${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`);  
}

console.log(`~~~~~ Sync execution: one ~~~~~`);
one();
console.log(`~~~~~ Async execution: waitAsync ~~~~~`);
waitAsync();
console.log(`~~~~~ Sync execution: two ~~~~~`);
two();
console.log(`~~~~~ Sync execution: three ~~~~~`);
three();


// console.log(`~~~~~ Sync execution: four ~~~~~`);
// four();
