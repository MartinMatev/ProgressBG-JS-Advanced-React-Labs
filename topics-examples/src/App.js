import React from 'react';
// TODO: why works:
// DONE: remove components/Header.js, index.js as entry point
import Header from "./components/Header";
import Footer from "./components/Footer";
import  TodoList from "./components/TodoList";
import  AddTodo from "./components/AddTodo";


function App(props) {
  return (
    <div className="App">
      <Header/>
      <AddTodo/>
      <TodoList title="Heading of TODO LIST"/>
      <Footer/>
    </div>
  );
}

export default App;
