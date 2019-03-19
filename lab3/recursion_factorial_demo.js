// Formula:
// if (n>0):
//   n! = n*(n-1)!

// if(n == 0):
//   n! = 1

function factoriel(n){
  if(n==0){
    return 1;
  }
  if(n>0){    
    return n*factoriel(n-1)

  }
}

console.log(factoriel(3)); // 24
console.log(factoriel(5)); // 120