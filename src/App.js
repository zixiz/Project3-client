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
            <div className="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light ml-auto">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                  <a class="nav-item nav-link btn"><Link to="/">Login</Link></a>
                  <a class="nav-item nav-link btn"><Link to="/register">Register</Link></a>
                </div>
              </div>
              </nav>
  
              <Route path="/" exact component={Login} />
              <Route path="/register/" component={Register} />
            </div>
          </Router>
        </div>
      );
    }
    if(this.props.role === "user"){
      return(
        <div>
          <User />
        </div>
      )
    }
    if(this.props.role === "admin"){
      return(
        <div className="container">
          <Admin/>
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
