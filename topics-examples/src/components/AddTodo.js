import React from 'react';


function clickHandler(e) {
    console.log('THe button was clicked');
}

export default function AddTodo(props) {
    return  (
      <div>
        <input type="text"/>
        <button onClick={clickHandler}>Add</button>
      </div>
    )
}



