import React from "react";
function FilterRow() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <p>Profile Image</p>
        </div>
        <div className="col-md-2">
          <p>Name</p>
        </div>
        <div className="col-md-2">
          <p>Email</p>
        </div>
        <div className="col-md-2">
          <p>ID</p>
        </div>
        <div className="col-md-2">
          <p>Phone Number</p>
        </div>
        <div className="col-md-2">
          <p>Username</p>
        </div>
      </div>
    </div>
  );
}

export default FilterRow;
