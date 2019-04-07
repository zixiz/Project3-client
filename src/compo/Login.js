import React, { Component } from 'react';
import {LoginAction} from '../state/actions';
import {connect} from 'react-redux';


class Login extends Component {
  state ={
    username:"",
    pass:""
  }
  handleTextforlogin(ev)
  {
    this.setState({ [ev.target.name]:ev.target.value  })
  }

  sendToLogin(){
    this.props.LoginAction(this.state)
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
                        Login
                      </span>

                      <div className="wrap-input100 validate-input" data-validate="Username is required">
                        <span className="label-input100">Username</span>
                        <input required onChange={this.handleTextforlogin.bind(this)}  className="input100" type="text" name="username" placeholder="Username..."/>
                        <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input" data-validate = "Password is required">
                        <span className="label-input100">Password</span>
                        <input required onChange={this.handleTextforlogin.bind(this)}  className="input100" type="password" name="pass" placeholder="*************"/>
                        <span className="focus-input100"></span>
                      </div>

                      <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                          <div className="login100-form-bgbtn"></div>
                          <button onClick={this.sendToLogin.bind(this)} className="login100-form-btn">
                            Login
                          </button>
                        </div>
                      </div>
                      <div className="wrap-input100 validate-input" data-validate = "Repeat Password is required">
                        {this.props.msg}
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
      //every field change new action will dispatch 
      LoginAction: function(input) { 
        debugger;
           return  dispatch(LoginAction(input));
          // return  dispatch({type:"LOAD_MOVIES", data:[]});
        }
      }
  };
const login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default login;
