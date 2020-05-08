import React from "react";
import Row from "./Row";
import FilterRow from "./FilterRow";

function Employee(props) {
  console.log(props);
  return (
    <div>
      <div className="container">
        <table className="table">
            <FilterRow 
            sortName={props.sortName}
            />
          <tbody>
           {
               props.emps.map(emp => (
                   <Row
                   first={emp.first}
                   last={emp.last}
                   email={emp.email}
                   id={emp.id}
                   phone = {emp.phone}
                   key = {emp.id}
                   image={emp.image}
                   />
               ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
