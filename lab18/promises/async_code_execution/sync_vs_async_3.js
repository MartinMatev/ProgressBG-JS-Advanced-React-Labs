function timeConsumingSyncCalc(count){
  // console.time('one');
  createArray(count);
  console.log(`SyncCalc done`); 
  // console.timeEnd('one');
  printNow('timeConsumingSyncCalc finished at:');
}
function timeConsumingAsyncCalc(count){
  // console.time('waitAsync');
  setTimeout(()=>{
    printNow('timeConsumingAsyncCalc start at:');
    createArray(count);
    console.log(`AsyncCalc done`); 
    printNow('timeConsumingAsyncCalc finished at:');
  }, 10000)
  // console.timeEnd('waitAsync');
}
function timeConsumingCalc(count){  
  for(let i=0; i<count; i++){
    i**i;
  }
}
function printNow(msg){
  let now = new Date();
  console.log(`${msg}: ${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`);  
}
function createArray(elemCount){
  var i=0, arr=[];
  arr.length = elemCount;
  arr.fill(1,0).map(e=>i++);
}


let testCount = 30000000;
printNow('SyncCalc test start');
timeConsumingSyncCalc(testCount);
timeConsumingSyncCalc(testCount);
// console.timeEnd('SyncCalc');
// printNow('SyncCalc test finished at:');

printNow('AsyncCalc test start');
timeConsumingAsyncCalc(testCount);
timeConsumingAsyncCalc(testCount);
// console.timeEnd('AsyncCalc');
// printNow('AsyncCalc test finished at:');

