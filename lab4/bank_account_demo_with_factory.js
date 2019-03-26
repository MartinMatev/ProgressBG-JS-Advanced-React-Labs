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

// A "Factory" for users
function createUser(name, balance){
  let userObj = {};

  userObj.name = name;
  userObj.balance = balance;

  userObj.withdraw = function(amount){  
    userObj.balance -= amount;
  },
  userObj.deposit = function(amount){  
    userObj.balance += amount;
  },
  userObj.log = function(){
    console.log(`${userObj.name} - ${userObj.balance}`);
  }

  return userObj;
}


let user1 = createUser('Maria', 100)
let user2 = createUser('Pesho', 200)

user1.withdraw(10);
user1.log();

user2.withdraw(30);
user2.log();

