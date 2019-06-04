import React from 'react';
import  Todo from "./Todo";
import  ListHeading from "./ListHeading";

export default function TodoList() {
    return  (

      <ul>
        {/* TODO: make example for Babel - step by step  */}
        <ListHeading color="red"><i>Todo List</i><i>Todo List 2</i></ListHeading>
        <Todo title="Todo1"/>
        <Todo title="Todo2"/>
        <Todo title="Todo3"/>
      </ul>
    )
}

