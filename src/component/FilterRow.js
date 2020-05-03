import React from "react";
import Employee from "./Employee"

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
          onClick={this.handleSort}>
              ID
          </button>

        </th>

        <th>Phone Number</th>
      </tr>
    </thead>
  );
}

export default FilterRow;
