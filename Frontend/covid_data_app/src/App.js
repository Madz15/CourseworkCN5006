import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./bootstrap.min.css";
import Case_Form from "./Components/AddCase"
import ShowCasesList from "./Components/DisplayCases.js"
import Case_UpDateForm from "./Components/CaseUpdate"
import Func_DeleteCase from "./Components/DeleteCase"
import ShowOSInformation from "./Components/ShowOSInformation";
import SearchCases from './Components/SearchCases';
import Search1 from './Components/Search1';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App_header">
            <div className="logo"> COVID DATA PROJECT CN 5006</div>

            <ul>
              <li > <Link to="/" >Home</Link> </li>
              <li> <Link to="/addnewcase" > Add New Cases</Link></li>
              <li> <Link to="/searchbycases" >Search By Cases</Link> </li>
              <li> <Link to="/searchbycounty" > Search By County/State</Link></li>
              <li><Link to="/os" >  Os Information</Link> </li>

            </ul>
          </header>
        </div>
        <div className="App_container">
          <div className="App_container1">

            <Route path="/" exact component={ShowCasesList} />
            <Route path="/edit/:id" component={Case_UpDateForm} />
            <Route path="/delete/:id" component={Func_DeleteCase} />
            <Route path="/addnewcase" component={Case_Form} />
            <Route path="/os" component={ShowOSInformation} />
            <Route path="/searchbycases" component={SearchCases}/>
            <Route path="/searchbycounty" component={Search1}/>

</div>
        </div>
        <footer className="App_footer_container">
          <div className="App_footer">
            <div class="footer-text">
              COVID DATA PROJECT CN 5006
            </div>
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;