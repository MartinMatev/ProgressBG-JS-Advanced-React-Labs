let str = `s Lorem ipsum dolor sit amet,consectetur adipisicing `;

let res = str.match(/[a-z-]{3,}/ig);
console.dir(res);