let obj = {
  'name': 'obj1',
  'log': function(){
    console.log(`test`);
  }
}


obj.log();
obj.toString();

console.log( obj.hasOwnProperty('log') );
console.log( obj.hasOwnProperty('toString') );
