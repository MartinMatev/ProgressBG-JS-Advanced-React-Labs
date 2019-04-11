// \w === [a-zA-Z0-9_]
var arr_str = [
  `AdA`,   // Yes     
  `mAdA`,  // No    
  `_AdA`,  // NO   
  `-AdA`,  // Yes   
  `!AdA!`,  // Yes   
  `!AdA1`,  // No   
] ; 

var re = /\bAdA\b/;  

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