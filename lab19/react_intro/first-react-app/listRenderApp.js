"use strict";

var users = ['Maria', 'Pesho', 'Asen'];

var App = function App() {
  return React.createElement(UsersList, {
    list: users
  });
};

var UsersList = function(_ref) {
  var list = _ref.list;

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