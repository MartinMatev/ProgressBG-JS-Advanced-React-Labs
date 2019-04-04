// lexicalThis = this;

// var obj = {
//     'exp': function(){
//         console.log(this === lexicalThis);
//     },
//     'arr': ()=>{console.log(this === lexicalThis)}
// }

// obj.exp(); // false
// obj.arr(); // true



function foo(){
  console.dir(this); // this = ?

  return () => {console.log(this)}  
}
let obj = {};

foo.call(obj)();