class Account{
  constructor(balance) {
    this.balance = balance
  }

  get bal(){
    return this.balance;
  }

  set bal(b){
    this.balance = b
  }
}


var obj1 = new Account(999999999);
console.log( obj1.bal );


// TODO: check ES docs for setter
obj1.bal = 3333;
console.log( obj1.bal);


