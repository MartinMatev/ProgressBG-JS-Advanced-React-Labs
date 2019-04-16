let str1 = 'booooob maria'; // Yes
let str2 = 'bob       maria'; // Yes
let str3 = 'bdssob maria'; // Yes
let str4 = 'bob pesho'; // No

let re = /(b.+?b)\s(.+)$/;

// x(?=y)
let re2 = /(b.+?b)(?=\s+bmaria)$/;
console.log( str2.match(re2)[1] );








