let str = `a(d`;

// TODO: update presentation with alternation least binding
let re = /a[b(|)c]d/g;
// let re = /\b(b.+?b)|(a.+?a)\b/g;

let res = str.match(re);

console.log(res);
