// Example - Subject-Observer pattern
//The Subject "class"
class Subject{
  constructor() {
    this.observerList = [];  
  }
  
  addObserver(observerArray) {
    this.observerList.push(...observerArray);
  }

  removeObserver(observerArray) {  
    observerArray.forEach(observer=>{
      // find the Observer that wants to be removed
      var index = this.observerList.indexOf(observer);
      // Remove it from the array
      this.observerList.splice(index, 1);          
    })  
        
  }

  notifyObservers(param) {
    for (let i = 0, len = this.observerList.length; i < len; i += 1) {
      this.observerList[i].update(param);
    }
  }  
}



// The Observer "class"
class Observer{
  constructor(name){
    this.name = name
  }
  // notification means calling a method of the subscriber object
  update() {
    throw "update() is not implemented";
  }
}