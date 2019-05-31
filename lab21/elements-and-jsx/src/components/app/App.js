import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';


function App() {
  return <div><FunctionComponent msg="Function Component is rendered"/></div>;
}


function FunctionComponent(props) {
  return <h1>{props.msg}</h1>;
}

export default App;
