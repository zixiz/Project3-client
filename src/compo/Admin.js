import React, { Component } from 'react';
import {LoginAction} from '../state/actions';
import {connect} from 'react-redux';


class Admin extends Component {
  
  

  sendToLogin(){
    this.props.LoginAction(this.state)
  }

  render() {
    return (
      <div>
        <h1>admin page</h1>
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
      LoginAction: function() { 
        debugger;
           return  dispatch(LoginAction());
          // return  dispatch({type:"LOAD_MOVIES", data:[]});
        }
      }
  };
const admin = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default admin;
