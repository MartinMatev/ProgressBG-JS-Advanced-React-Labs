// user1 = {
//   'name': 'Maria',
//   'balance': 100,
//   'withdraw': function(ammount){  
//     user1.balance -= ammount
//   },
//   'deposit':function(ammount){  
//     user1.balance += ammount
//   }
// } 
// user2 = {
//   'name': 'Pesho',
//   'balance': 300,
//   'withdraw': function(ammount){  
//     user[1] -= ammount
//   },
//   'deposit':function(ammount){  
//     user[1] += ammount
//   }
// }

// A "Constructor" for users
function User(name, balance){  
  this.name = name;
  this.balance = balance;
  
  this.withdraw(ammount){
    this.balance -= ammount
  };

  this.log(){
    console.log(`${this.name} - ${this.balance}`);
  };


  // return this;
}


let user1 = new User('Maria', 100)
let user2 = new User('Pesho', 200)

user1.withdraw(10);
user1.log();

user2.withdraw(30);
user2.log();

