import React from 'react';

function Row(props){
    return(
        <tr>
        <td>
          <img src={props.image} alt={props.first} />
        </td>
        <td>{props.first} {props.last}</td>
        <td>{props.email}</td>
        <td>{props.id}</td>
        <td>{props.phone}</td>
      </tr>
    )
}

export default Row;