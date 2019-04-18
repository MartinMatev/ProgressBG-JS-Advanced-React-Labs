let re1 = /<.+?>/g;
let re2 = /<[^>]+?>/;

let tests = [
  `<strong><b>test</b></strong>`
]

tests.forEach(str=>{
  let res = str.match(re2);
  console.log(`res: ${res}`);
  console.dir(res);
})