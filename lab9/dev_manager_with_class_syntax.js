class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }
}

class Manager extends Person{
    constructor(name, age, managees){
        super(name, age);
        this.managees = managees;
    }

    greet(){
        // Call the base function that we overrode.
        super.greet();

        let manageesNames = '';
        this.managees.forEach(function(element) {
            manageesNames += element.name + ', ';
        });
        
        console.log('I manage ' + manageesNames);
    }
}

class Developer extends Person{
    constructor(name, age, skillset){      
        super(name, age)
        this.skillset = skillset;
    }

    greet() {
        super.greet();
        console.log('I know ' + this.skillset);
    }
}

let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
let gates = new Manager('Bill Gates', 43, [maria, pesho]);


maria.greet();
pesho.greet();
gates.greet();