let simplePromise = new Promise( (a,b)=>{
  a()
});


let cleanRoom =  new Promise( (resolve, reject) => {
  setTimeout(function() {
    console.log(`cleaning room`);
    resolve()
  }, 1000);
} );

function goToSleep(){
  console.log(`goToSleep`);
}

function stayAwake(){
  console.log(`stayAwake`);
}

function eatIcecream(){
  return new Promise( (resolve, reject) => {
    setTimeout( _=>{
      console.log(`eatIcecream`);
      reject()
    }, 2000)

    // TODO: make it work as such
    // setTimeout( _=>{
    //   console.log(`eatIcecream`);
    //   resolve()
    // }, 3000)
  })
  
}

cleanRoom
  .then(eatIcecream)
  .then(goToSleep)
  .catch(stayAwake)