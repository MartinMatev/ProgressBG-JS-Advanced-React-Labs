"use strict";

var users = ['Maria', 'Pesho', 'Asen', 'George'];

var App = function App() {
  return React.createElement(UsersList, {
    list: users
  });
};

var UsersList = function(obj) {
  var list = obj.list;

  return React.createElement("ul", null, list.map( item =>
    React.createElement("li", {
      key: item
    }, item)
  ));
};

ReactDOM.render(
  App(),
  document.getElementById('root')
);