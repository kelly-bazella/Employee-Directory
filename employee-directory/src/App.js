import React, { Component } from "react";
import Employee from "./component/Employee";
import Header from "./component/Header";
import API from "./utils/API";

class App extends Component {
  state={
    amount:234,
    employeeData:[]
  }

componentDidMount(){
  API.getEmployees(this.state.amount)
  .then((employeeData) => {
    const empData = employeeData.data.results.map( emp => {
      const data = {
        first:emp.name.first,
        last:emp.name.last,
        email:emp.email,
        id: emp.id.value,
        phone: emp.phone,
        image: emp.picture.thumbnail
      };
      return(data);
    })
    this.setState({employeeData:empData})
   // console.log(this.state.employeeData)
  })
}

  render() {
    return (
      <div>
        <Header />
    
        <Employee 
        // for each 
      emps={this.state.employeeData}
    
         />
      </div>
    );
  }
}

export default App;
