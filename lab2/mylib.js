// next variables have to be non-global
(function (){
  function getUserName(){
    var loc = 5;
    console.log(`getUserName is called`);
  }

  const PI = 3.14;
  var x = 34;
})();




// export greet function name only
function greet(userName){
  console.log(`Hello ${userName}`);
}
