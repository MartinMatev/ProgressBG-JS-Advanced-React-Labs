function fullArrowSyntax(){
  let add2numbers = function(x,y){
    return x+y
  }
  console.log( add2numbers(2,3) );

  // (param1, param2, …, paramN) => { statements }

  let add2numbersArrow = (x,y) => {return x+y}
  console.log(add2numbersArrow(2,3));
}

function oneArgumentArrowSyntax(){
  // singleParam => { statements }

  function greet(name){
    console.log(`Hello ${name}`);
  }
  greet('Ada')

  let greetArrow = name => {console.log(`Hello ${name}`);}
  greetArrow('Ada');
}

function singleExpressionArrowSyntax(){
  // TODO: upload example in slides for that...
  // (param1, param2, …, paramN) => expression
  // (param1, param2, …, paramN) => { return expression}

  let add2numbers = function(x,y){
    return x+y
  }
  console.log( add2numbers(2,3) );

  let add2numbersArrow = (x,y) => x+y
  console.log(add2numbersArrow(2,3));
}

function simplestArrowSyntax(){
  singleParam => expression

  function greetInUpper(name){
    console.log(name);
    return name.toUpperCase()
  }
  console.log( greetInUpper('ada') );


  let greetInUpperArrow = name => console.log(name); name.toUpperCase();
  console.log( greetInUpperArrow('ada') );
}


function toDo(){
  ( (x,y) => x,y )(2,3)
  // VM559:1 Uncaught ReferenceError: y is not defined at <anonymous>:1:14
}

simplestArrowSyntax()
