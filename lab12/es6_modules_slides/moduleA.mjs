function aux(){
  console.log(`I'm aux`);
}

function foo(){
  aux();
  console.log(`foo from moduleA is called!`);
}


// exports a constant
export const PI = 3.14;

// named exports
export { foo };