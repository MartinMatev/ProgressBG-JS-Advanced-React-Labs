// let arr = [1,2,3]; // iterable, by default

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

// function callback(e){
//   console.log(e);
// }
// arr.forEach( callback )


// forEach on custom object
let obj = {
  '1': 1,
  '2':2,
  '3':3,
}
obj.next = function(){

  // return obj element
}


// let objIterator = 
obj.forEach( e=>console.log(e) )