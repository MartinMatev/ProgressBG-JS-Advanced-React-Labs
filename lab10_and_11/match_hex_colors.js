let tests = [
  `#111`,  
  `#FF1100`,  
  `#CD234G`,  
] ; 

let re1 = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
let re2 = /^#([0-9A-F]{3}){1,2}$/i;

tests.forEach(str=>{
  if(re2.test(str)){
    console.log(`${str} marches`);
  }
})