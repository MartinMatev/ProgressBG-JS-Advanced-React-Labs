import React from 'react';
import  Todo from "./Todo";


// expolt function TodoList() {
//     return  (
//       <ul>
//         <Todo title="Todo1"/>
//         <Todo title="Todo2"/>
//         <Todo title="Todo3"/>
//       </ul>
//     )
// }

class TodoList extends React.Component{

  constructor(){
    super();

    this.state = {
      'todos' :  [
        {'title': 'Todo 1', 'completed': false},
        {'title': 'Todo 2', 'completed': true},
        {'title': 'Todo 3', 'completed': false},
        {'title': 'Todo 4', 'completed': false},
      ]
    };
  }
  render(){
    return  (
          <div>
            <h1>{this.props.title}</h1>
            <ul>
              {/* TODO: send as HW to map */}
              {/* <Todo title={this.state.todos[0].title}/>
              <Todo title={this.state.todos[1].title}/>
              <Todo title={this.state.todos[2].title}/> */}

              {/* HW Solution with map */}
              {this.state.todos.map( todo =>
                <Todo title={todo.title} completed={todo.completed}/>
              )}
            </ul>
          </div>
        )
  }
}


export default TodoList



