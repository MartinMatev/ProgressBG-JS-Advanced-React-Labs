// Given is the next array of numbers:
let numbers = [1,2,3,4,5,6,7,8,9,10];

// Write a program which will output in the console the sum of the squres of even numbers, 
let sum = numbers.filter( n=> n%2===0 ).map(n=>n**2).reduce((a,c)=>a+c)
console.log(`sum=${sum}`);



