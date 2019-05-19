let quote = `A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.`;

let words = 
  quote.split(' ')
  .filter( w=>w.length>=3 )
  .filter( w=>w.charAt(0).toLowerCase()==='t')
  .map( w=>w.toUpperCase())



words.forEach( w=>console.log(w) );
