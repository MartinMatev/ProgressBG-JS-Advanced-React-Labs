var accountFactory = function(bal){
  // private members
  var balance = bal;

  // public
  var obj = {
    getBalance: ()=>console.log(`Balnace = ${balance}`),
    setBalance: (b)=>balance = b,
  };

  return obj;
}


var obj1 = accountFactory(999999999);
var obj2 = new Account(999999999);

// let's try to change the balance directly:
obj2.balance = 0;
obj2.getBalance();
// Balnace = 999999999

// let's try to change the balance through the setter:
obj1.setBalance(0);
obj1.getBalance();
// Balnace = 0