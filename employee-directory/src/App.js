import React, { Component } from "react";
import Employee from "./component/Employee";
import Header from "./component/Header";
import FilterRow from "./component/FilterRow";
import API from "./utils/API";

const sample = "Hi I'm a sample";

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
        username: emp.login.username,
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
        <FilterRow />
        <Employee 
        // for each 
      // first={this.state.employeeData}
    
         />
      </div>
    );
  }
}

export default App;
