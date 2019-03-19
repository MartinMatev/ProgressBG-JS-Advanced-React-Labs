var cats = [];

var i;
for (i = 0; i < 3; i++) {
    cats[i] = (function outer(j){
      var j = i;
      return function inner(){
        console.log(`1. Cat ${j} is ready!`);
      }
    })(i)
}


cats[0](); //Cat 3 is ready!
cats[1](); //Cat 3 is ready!
cats[2](); //Cat 3 is ready!

