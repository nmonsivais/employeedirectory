import React from 'react';
import logo from './logo.svg';
import './App.css';
import employees from "./employees.json"

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    employees: employees

  };

  handleLastName = () => {
    console.log("hi")
    this.setState({ employees: this.state.employees.sort((a, b) => { return a.employeeLName.localeCompare(b.employeeLName) }) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button onClick={this.handleLastName}>Last Name</button>

          {
            this.state.employees.map((employee, index) => {
              return <div key={index}>{employee.employeeFName} {employee.employeeLName} : {employee.occupation}</div>
            })

          }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
