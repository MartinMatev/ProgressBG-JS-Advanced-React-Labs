var str = "test@ tttt t.com";

//the RegEx to find if the str contains '@' symbol:
var re = /@ t+ \./;

// do the test:
if ( re.test(str) ){
  console.log(`Match`);
}else{
  console.log(`No match!`);
}


// str.match(//)