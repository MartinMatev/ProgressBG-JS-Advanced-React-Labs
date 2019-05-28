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
  return React.createElement("div", {
    className: "App"
  }, React.createElement("h1", null, "Hello World"));
}

export default App;
