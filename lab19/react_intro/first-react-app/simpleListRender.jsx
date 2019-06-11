"use strict"
var users = ['Maria', 'Pesho', 'Asen'];

var App = function App() {
  return React.createElement(UsersList, {
    list: users
  });
};
const UsersList = () => (
  <ul>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);


ReactDOM.render(
    App(),
    document.getElementById('root')
  );