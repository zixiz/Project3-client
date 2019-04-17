import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./compo/Register";
import Login from "./compo/Login";
import {connect} from 'react-redux';
import Admin from "./compo/Admin";
import User from "./compo/User";

import {CheckSession} from "./state/actions"

class App extends Component {

  async componentDidMount(){
    this.props.CheckSession();
  }

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
    if(this.props.role == "user"){
      return(
        <div>
          <User />
          {/* <Router>
            <div>
              <Route exact path="/user"  component={User} />
            </div>
          </Router> */}
        </div>
      )
    }
    if(this.props.role == "admin"){
      return(
        <div>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/admin">admin</Link>
                  </li>
                </ul>
              </nav>
              <Route path="/admin" exact component={Admin} />
            </div>
          </Router>
        </div>
      )
    }

    
  }
}
const  mapDispatchToProps = dispatch => {  
  return  { 
      CheckSession: function() { 
           return  dispatch(CheckSession());
        }
      }
  };

const mapStateToProps = state => { 
  return { role: state.role };
}; 
const app = connect(mapStateToProps,mapDispatchToProps)(App);
export default app;
