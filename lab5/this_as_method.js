// user1 = {
//   'name': 'Maria',
//   'balance': 100,
//   'log': function(){  
//     // console.log(this.name + " : " + this.balance);
//     console.log(`this in method: ${this}`);
//   },  
// }

// TASK: create User constructors with properties given above
function User(name, balance){
  this.name = name;
  this.balance = balance;

  this.log = function(){
    console.log(this);
  }
}


let user1 = new User('Maria', 100)
user1.log();

// note, when "new" is not used:
let user1 = User('Maria', 100)
window.log();
