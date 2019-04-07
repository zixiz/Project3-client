import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./compo/Register";
import Login from "./compo/Login";
import {connect} from 'react-redux';

class App extends Component {
  render() {
    if(!this.props.role){
      return (
        <div className="App">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </nav>
  
              <Route path="/" exact component={Login} />
              <Route path="/register/" component={Register} />
            </div>
          </Router>
        </div>
      );
    }
    
  }
}
const mapStateToProps = state => { 
  return { role: state.role };
}; 
const app = connect(mapStateToProps,null)(App);
export default app;
