import React, { Component } from 'react';
import {Logout , CheckSession, DataUser} from '../state/actions';
import {connect} from 'react-redux';



class User extends Component {
  componentDidMount(){
    this.props.DataUser();
  }
  
   sendToLogout(){
    this.props.Logout();
  }

  render() {
    if(this.props.role == "user"){
      return (
        <div className="container"> 
          <div className="menu">
            <div className="row mt-3">
              <div className="col-4">
                <h2>VacationHunter</h2>
              </div>
              <div className="col-4">
                <h3>Hello {this.props.clientName}</h3>
              </div>
              <div className="col-4">
                <button onClick={this.sendToLogout.bind(this)} className="btn btn-primary">Logout</button>
              </div>
            </div>
          </div>  
        </div>
      );
    }
  }
}

const mapStateToProps = state => { 
  return { role: state.role,clientName:state.clientName,id: state.id };
}; 

const  mapDispatchToProps = dispatch => {  
  return  { 
      Logout: function() { 
        return  dispatch(Logout());
        },
        CheckSession: function(){
          return dispatch(CheckSession());
        },
        DataUser: function(){
          return dispatch(DataUser());
        }
  }};
const user = connect(mapStateToProps, mapDispatchToProps)(User);

export default user;
