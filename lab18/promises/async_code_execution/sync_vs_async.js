function syncDemo(){
  console.time('syncDemo');
  console.log(`1`);
  console.log(`2`);
  console.log(`3`);
  console.timeEnd('syncDemo');
}

function asyncDemo(){
  //setTimeout is executed asynchronous and is not blocking the rest of the code!
  console.time('asyncDemo');
  setTimeout(()=>{console.log(`1`)}, 1500)
  setTimeout(()=>{console.log(`2`)}, 1000)
  setTimeout(()=>{console.log(`3`)}, 500) 
  console.timeEnd('asyncDemo');
}

console.log(`~~~~~ Sync execution ~~~~~`);
syncDemo();

console.log(`\n~~~~~ Async execution ~~~~~`);
asyncDemo();
