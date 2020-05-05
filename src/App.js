import React, { Component } from "react";
import Employee from "./component/Employee";
import Header from "./component/Header";
import API from "./utils/API";

class App extends Component {
    state = {
      amount: 234,
      employeeData: [],
      sort: {
        column: null,
        direction: "desc",
      },
    };
  

  sortId = (id) => {
    console.log(id)
  }

  // code to sort first name column (use later possibly)
  // sortName = (column) => {
  //   return e => {
  //    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc'
  //    const sortEmployees = this.state.employeeData.sort((a, b) => {
  //      if (column === 'name.first') {
  //       const nameA = a.name.first.toUpperCase()
  //       const nameB = b.name.first.toUpperCase()
  //       if(nameA < nameB)
  //         return -1
  //       if(nameA> nameB)
  //       return 1
  //       else return 0
  //      }else {
  //        return a.name.first-b.name.first
  //      }
  //    })
  //    if (direction === 'desc'){
  //      sortEmployees.reverse()
  //    }
  //    this.setState({
  //      employeeData: sortEmployees,
  //      sort:{
  //        column, direction
  //      }
  //    })
  //   }

  //  }
  // code to filter through rows

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
      this.setState({ employeeData: empData });
      // console.log(this.state.employeeData)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Employee sortId={this.sortId} emps={this.state.employeeData} />
      </div>
    );
  }
}

export default App;
