function factorial(n){
    if (n == 1) {
        // f(1) = 1 => the END condition
        return 1;
    }else {
        // f(n) = n * f(n-1)
        return (n * factorial(n - 1));
    }
}

function factIter(n){
  // res = (n-0) * (n-1) * (n-2)
  let res = 1;
  for(let i = 0; i<n; i++){
    res *= (n-i)
  }


 return res;
}

console.log(factorial(3));
console.log(factIter(5));




