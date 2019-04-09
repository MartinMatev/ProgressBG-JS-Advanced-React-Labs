function divideInt(a,b) {
    if( x === 0 ){
      throw new Error("Can not divide by zero");        
      // throw 'Can not divide by zero';
    }else{
      return Math.trunc(a/b)
    }
}


let res;
try{    
  res = divideInt(7,0);
  res = res*coef;
}catch(err){  
  // if Reference Error=> log(Reference Error)
  // if Divide by Zero => 'Ups, something went wrong!'

  // TODO:
  if(err instanceof ReferenceError){
    console.log(`ReferenceError`);
  }else if(err instanceof Error) {
    console.log(`Ups, something went wrong!`);
  }
}

console.log(res);