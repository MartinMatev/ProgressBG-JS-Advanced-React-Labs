class Person{ 
      // fields declaration syntax:
      name = "Anounymous";
      age = 100;

      constructor(name, age){        
        this.name = name;
        this.age = age;
        Person.counter();
      }

      static counter(){
        Person.count++;
        console.log(`${Person.count} was created!`);
      }

      greet(){
        console.log(`I'm ${this.name}`);
      }
    }

    Person.count = 0;

    let p1 = new Person();
    // let p2 = new Person('Maria', 42);
    
    console.log(p1);