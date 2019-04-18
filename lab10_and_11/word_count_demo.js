let str = `s Lorem ipsum dolor sit amet,conse+ctetur adipisicing `;

let re1 = /\b[^\s!,]{3,}?\b/ig;

let res = str.match(re1);
console.dir(res);