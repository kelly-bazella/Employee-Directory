import React from "react";


function FilterRow(props) {
  
  return (
    <thead>
      <tr>
        {/* onclick on column to sort, send through props */}
        <th>Profile Image</th>

        <th>
          <button 
          className="btn btn-secondary" 
          onClick={props.sortName} 
          value="first">
          Name
          </button>
          
          </th>

        <th>Email</th>

        <th>

          <button 
          onClick={props.sortName} 
          value="id"
          className="btn btn-secondary"
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
