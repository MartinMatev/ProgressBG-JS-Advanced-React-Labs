import React from 'react';


export default function Todo(props) {
    return  (
      <li>{props.title} ({props.completed?'Done':'Not Done'})</li>
    )
}



