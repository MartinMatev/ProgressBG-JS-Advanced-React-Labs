// NB: this is not example of good practice for grouping regex. Why? => check next slides
var re = /\b(straw|rasp)?berries/;
var strings = [
  'Icecream with strawhfdsfjdshfjdshf? No!',
  'Icecream with strawberries? Yes!',
  'Icecream with raspberries? Yes!',
  'Icecream with rasberries? No!',
  'Icecream with berries? Yes!',
]

strings.forEach(str=> str.match(re) ?
  console.log(`${str} YES! YES!`) : console.log(`${str} NO! NO!`)
)