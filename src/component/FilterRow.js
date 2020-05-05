import React from "react";


function FilterRow(props) {
  
  return (
    <thead>
      <tr>
        {/* onclick on column to sort, send through props */}
        <th>Profile Image</th>

        <th>Name</th>

        <th>Email</th>

        <th>

          <button 
          // onClick={this.props.sortId}
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
