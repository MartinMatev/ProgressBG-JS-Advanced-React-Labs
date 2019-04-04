function powerIter(base, coef){
  let res = 1;

  for(let i = 1; i<=coef; i++){
    res = res*base
  }

  return res;
}

function power(base, coef){
  // coef = 1 => return 1
  // coef > 1 => return power(base * (coef-1))  
  if(coef == 0){
    return 1
  }

  if(coef>=1){
    // console.log(`coef=${coef}`);
    return base*power(base,coef-1 )
  }
}



// 2**10
console.log(powerIter(2, 4)); // 1024
console.log(power(2, 4)); // 1024