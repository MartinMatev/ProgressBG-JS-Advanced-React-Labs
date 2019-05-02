// \w === [a-zA-Z0-9_]
var arr_str = [
  `mAdA`,  // Yes    
] ; 

var re = /\bA.+A\b/;  

// do the test:
function regexTest(str){
  if ( re.test(str) ){
    console.log(`YES`);
  }else{
    console.log(`NO`);
  }

}
arr_str.forEach(regexTest)

// str.match(//)