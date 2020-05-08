import React, { Component } from "react";
import Employee from "./component/Employee";
import Header from "./component/Header";
import API from "./utils/API";

class App extends Component {
  state = {
    amount: 234,
    employeeData: [],
    sortedData: [],
    sortDirection: "desc",
  };

  // sortId = (column) => {
  //
  // }

  // code to sort first name column (use later)
  sortName = (e) => {
    const column = e.target.value;
    console.log(column);
    const direction = this.state.sortDirection === "desc" ? "asc" : "desc";
    const sortEmployees = this.state.employeeData.sort((a, b) => {
      const nameA = a[column];
      const nameB = b[column];
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      else return 0;
    });
    if (direction === "desc") {
      sortEmployees.reverse();
    }
    this.setState({
      sortedData: sortEmployees,
      sortDirection: direction
    });
  };

  //code to filter rows
  //  filterName = (name) => {

  //  }

  componentDidMount() {
    API.getEmployees(this.state.amount).then((employeeData) => {
      const empData = employeeData.data.results.map((emp) => {
        const data = {
          first: emp.name.first,
          last: emp.name.last,
          email: emp.email,
          id: emp.id.value,
          phone: emp.phone,
          image: emp.picture.thumbnail,
        };
        return data;
      });
      this.setState({ employeeData: empData, sortedData: empData });
      // console.log(this.state.employeeData)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Employee sortName={this.sortName} emps={this.state.sortedData} />
      </div>
    );
  }
}

export default App;
