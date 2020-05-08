import React from "react";


function FilterRow(props) {
  
  return (
    <thead>
      <tr>
        {/* onclick on column to sort, send through props */}
        <th>Profile Image</th>

        <th>
          <button onClick={props.sortName} value="first">
          Name
          </button>
          
          </th>

        <th>Email</th>

        <th>

          <button 
          onClick={props.sortName} value="id"
          >
            ID
          </button>

        </th>

        <th>Phone Number</th>
      </tr>
    </thead>
  );
}

export default FilterRow;
