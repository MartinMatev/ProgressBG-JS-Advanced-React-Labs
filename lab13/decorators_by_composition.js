function compositDecorate(component) {
  const protoComp = Object.getPrototypeOf(component);

  function Decorator(component) {
    this.component = component;
  }
  Decorator.prototype = Object.create(protoComp);


  //new method
  Decorator.prototype.greetings = function() {
    return 'Good evening';
  };
  
  //delegated method
  Decorator.prototype.hello = function() {
    return this.component.hello.apply(this.component, arguments);
  };
}