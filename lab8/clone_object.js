function assignmentReferenceDemo(){
  let p1 = {
    'name': 'Pesho',
    'age': 23
  }

  let x = 4;

  let y = x;
  x = 5;
  // console.log(y);

  let p2 = p1;
  p1.name = 'Maria';
  console.log(p2.name);
}
function forInDemo(){
  let obj = {a:1, b:2, c:3};

  for(let prop in obj){  
      console.log(`${prop} : ${obj[prop]}`);      
  }
}
function forOfDemo(){
  let arr = [1,2,3];

  for(let el of arr){  
      console.log(`${el}`);      
  }
}
function CopyObjDemo(){

  let o1 = {
    'address': {
      'city': 'Sofia',
      'zip': 1504
    },
    'age': 23
  }  

  function deepCopy(o1){
    let o3 = {};

    return Object.assign({}, o1);
  }
  
  function shallowCopyObj(o1){
    let o2 = {};

    for(let p in o1){
      o2[p] = o1[p]
    }
    return o2;
  }

  let o2 = deepCopy(o1);  
  o1.age = 48;
  o1.address.city = 'Varna';

  console.log(o2.age); // 23 old value
  console.log(o2.address.city); // 'varana', new value

}

CopyObjDemo();





