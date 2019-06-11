import React from 'react';


export default function ListHeading(props) {
    console.dir(props)
    return  (
      <h1>{props.children} - {props.color}</h1>
    )
}

