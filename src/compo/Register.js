import React, { Component } from 'react';
import {RegisterAction} from '../state/actions';
import {connect} from 'react-redux';


class Register extends Component {
  state ={
    name:"",
    username:"",
    pass:"",
    repeat:""

  }
  handleText(ev)
  {
    this.setState({ [ev.target.name]:ev.target.value  })
  }

  sendToRegister(){
    this.props.registerAction(this.state)
    
  }

  render() {
    return (
      <div className="registerstyle">
              <div className="limiter">
                <div className="container-login100">
                  <div className="login100-more"></div>

                  <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                    <form className="login100-form validate-form"/>
                      <span className="login100-form-title p-b-59">
                        Sign Up
                      </span>

                      <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Full Name</span>
                        <input required onChange={this.handleText.bind(this)}  className="input100" type="text" name="name" placeholder="Name..."/>
                        <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input" data-validate="Username is required">
                        <span className="label-input100">Username</span>
                        <input required onChange={this.handleText.bind(this)}  className="input100" type="text" name="username" placeholder="Username..."/>
                        <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input" data-validate = "Password is required">
                        <span className="label-input100">Password</span>
                        <input required onChange={this.handleText.bind(this)}  className="input100" type="password" name="pass" placeholder="*************"/>
                        <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input" data-validate = "Repeat Password is required">
                        <span className="label-input100">Repeat Password</span>
                        <input required onChange={this.handleText.bind(this)} className="input100" type="password" name="repeat" placeholder="*************"/>
                        <span className="focus-input100"></span>
                      </div>

                      <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                          <div className="login100-form-bgbtn"></div>
                          <button onClick={this.sendToRegister.bind(this)} className="login100-form-btn">
                            Sign Up
                          </button>
                        </div>
                      </div>
                      <div className="row mt-2">
                      <div className="col"> 
                        <span class="badge badge-warning">{this.props.msg}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return { msg: state.msg };
}; 

const  mapDispatchToProps = dispatch => {  
  return  { 
      registerAction: function(input) { 
           return  dispatch(RegisterAction(input));
        }
      }
  };
const register = connect(mapStateToProps, mapDispatchToProps)(Register);

export default register;
