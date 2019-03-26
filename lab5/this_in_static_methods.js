class A{
    id=1;
   
    method1(){
        // console.log(`This in method: ${this}`);
        console.dir(this);
    }

    static staticMethod(){
        // console.log(`This in static method: ${this}`);
        console.dir(this);
    }
}


let obj = new A();
console.dir(obj);

console.dir(A);
// object A => { staticMethod: function }