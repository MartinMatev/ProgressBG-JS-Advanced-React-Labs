var regexes = [
  // task: match only 'strawberries' or 'raspberries':
  /\bstraw|rasp{1}berries/,         // not what we want
  /(?:\bstraw)|(?:rasp{1}berries)/, // the same as above!!!
  /\b(?:straw|rasp){1}berries/,     // That's it!
];
var strings = [
  'Icecream with strawberries?',
  'Icecream with raspberries?',
  'Icecream with straw?',
  'Icecream with whateverraspberries?',
];

regexes.forEach(re=>{
  console.log(`\nMatched with: ${re}`);
  strings.forEach(str=>str.match(re) ?
    console.log(`${str} YES!`) : console.log(`${str} NO!`)
  )
});