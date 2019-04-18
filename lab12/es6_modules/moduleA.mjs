function foo(){
  console.log(`foo from moduleA is called!`);
}

// exports a constant
export const PI = 3.14;

// named exports
export { foo };