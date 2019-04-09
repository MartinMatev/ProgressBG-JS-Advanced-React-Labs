// Person constructor
let Person = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
};

// Manager constructor
let Manager = function(name, age, managees){   
    Person.call(this, name, age)
    this.managees = managees;
}
Manager.prototype = Object.create(Person.prototype)

// Override Persons's greet() function
Manager.prototype.greet = function() {
    // Call the base function that we overrode.
    Person.prototype.greet.call(this);


    let manageesNames = '';
    this.managees.forEach(function(element) {
        manageesNames += element.name + ', ';
    });


    // TODO: 
    // this.managees.join() -  make it word
    
    console.log('I manage ' + );
}
Manager.prototype.constructor = Manager;


// Developer constructor
let Developer = function(name, age, skillset){      
    Person.call(this, name, age)
    this.skillset = skillset;
}
Developer.prototype = Object.create(Person.prototype)

// Override Persons's greet() function
Developer.prototype.greet = function() {
    
    Person.prototype.greet.call(this);
    console.log('I know ' + this.skillset);
}
Developer.prototype.constructor = Developer;



let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
let gates = new Manager('Bill Gates', 43, [maria, pesho]);


maria.greet();
pesho.greet();
gates.greet();