// filter
function filterDemo(){
  let arr = [1,2,3,4,5];
  let arrEven = arr.filter( x => x%2===0 );

  console.log(arrEven);
}


// map
function mapDemo(){
  let arr = [1,2,3,4,5];
  let arrEven = arr.map( (x,i)=>x**i );

  //   callback(currentValue[, index[, array]]) {
  //     // Return element for new_array
  // }

  console.log(arrEven);
}

// reduce
function reduceDemo(){
  let arr = [1,2,3,4,5];
  let arrSum = arr.reduce( (a,c)=> a+c);
  console.log(arrSum);  
}
reduceDemo();


// map-reduce demo
function mapReduceDemo(){
  let arr = [1,2,3];

  let arrSqrtSum = arr.map( x=> x**2).reduce( (a,c)=> a+c );

  console.log(`arrSqrtSum: ${arrSqrtSum}`); 
}






