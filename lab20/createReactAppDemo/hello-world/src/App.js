import React from 'react';
import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }


function App() {
  return React.createElement("div", {className: "App"}, 
    React.createElement("h1", null, 
      React.createElement('span',null,'Hello')));
}

export default App;
