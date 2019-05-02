function Account(balance){
  let _balance = balance
  
  this.getBalance = function(){
    return _balance;
  }

  this.setBalance = function(b){
    _balance = b
  }
}

var obj1 = new Account(999999999);
var obj2 = new Account(9);
console.log( obj1.getBalance() ); // 999999999
console.log( obj2.getBalance() ); // 9

obj1._balance = 3333;
obj2._balance = 3;
console.log( obj1.getBalance() ); // 999999999
console.log( obj2.getBalance() ); // 9

obj1.setBalance(44444);
obj2.setBalance(4);
console.log( obj1.getBalance() ); // 44444
console.log( obj2.getBalance() ); // 4


