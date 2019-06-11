function cleanRoom(callback){
  setTimeout(function() {
    console.log(`cleaning room`);
    callback()
  }, 1000);
}

function eatIcecream(){
  setTimeout( _=>{
    console.log(`eatIcecream`);
  }, 2000)
}

cleanRoom(eatIcecream);

// TASK: implement: if eatIcecream, then goToBed() with callbacks only here;
