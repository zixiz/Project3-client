import React, { Component } from 'react';
import {LoginAction} from '../state/actions';
import {connect} from 'react-redux';


class User extends Component {
  
  

  sendToLogin(){
    this.props.LoginAction(this.state)
  }

  render() {
    return (
      <div>
        <h1>user page</h1>
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
const user = connect(mapStateToProps, mapDispatchToProps)(User);

export default user;
