// \w === [a-zA-Z0-9_]
// \W === [^a-zA-Z0-9_]
var arr_str = [
  `Lorem ipsum dolor sit amet,consectetur adipisicing `
] ; 

console.log( arr_str[0].split(' ').length );


var re = /\ba/g;  

// do the test:
function regexTest(str){
  

}
arr_str.forEach(str=>{
  let res = str.match(re);
  console.dir(res);
})

// str.match(//)