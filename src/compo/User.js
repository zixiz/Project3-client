import React, { Component } from 'react';
import {Logout , DataUser , AddFollow, RemoveFollow} from '../state/actions';
import {connect} from 'react-redux';
import io from 'socket.io-client';


class User extends Component {
  state = {
    checkedOn: true,
    checkedOff: false
  }

  componentDidMount(){
    var protocol = window.location.protocol;
    var slashes = protocol.concat("//");
    var url = slashes.concat(window.location.hostname)+":8888";
    this.props.DataUser();
    const socket=io(url);
    socket.on("vacationsChange",(msg)=>{
      this.props.DataUser();
    });
  }
  
   sendToLogout(){
    this.props.Logout();
  }

  FollowChange(vacationID,ev){
    if(ev.target.checked === true){
      console.log('checked on')
      console.log(vacationID);
      this.props.AddFollow(vacationID);
    }else{
      this.props.RemoveFollow(vacationID);
    }
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
          <div className="row mt-3">
            <div className="col">
              {this.props.vacationOnFollow.map(v=>{
                return(
                  <div className="card" style={{ width: "18rem" }}>
                  <img class="card-img-top" src={v.image} />
                  <div className="card-body">
                    <h5 className="card-title">{v.destination}</h5>
                    <p className="card-text">{v.description}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p><label className="fas fa-plane-departure plane-icon"></label>{v.start_date}</p>
                            <p><label className="fas fa-plane-arrival plane-icon"></label>{v.end_date}</p>
                        </li>
                        <li className="list-group-item">{v.price}<label className="fas fa-dollar-sign dollar-icon"></label></li>
                        <li className="list-group-item"><lable>Follow:</lable><input onChange={this.FollowChange.bind(this,v.id)} checked={this.state.checkedOn}  type="checkbox" /><label className="fas fa-eye eye-icon">{v.followers}</label></li>
                    </ul>
                  </div>
                  </div>
                )
              })}
              {this.props.vacationsUnFollow.map(v=>{
                  return(
                    <div className="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={v.image} />
                    <div className="card-body">
                      <h5 className="card-title">{v.destination}</h5>
                      <p className="card-text">{v.description}</p>
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                              <p><label className="fas fa-plane-departure plane-icon"></label>{v.start_date}</p>
                              <p><label className="fas fa-plane-arrival plane-icon"></label>{v.end_date}</p>
                          </li>
                          <li className="list-group-item">{v.price}<label className="fas fa-dollar-sign dollar-icon"></label></li>
                          <li className="list-group-item"><lable>Follow:</lable><input onChange={this.FollowChange.bind(this,v.id)} checked={this.state.checkedOff}  type="checkbox" /><label className="fas fa-eye eye-icon">{v.followers}</label></li>
                      </ul>
                    </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => { 
  return { role: state.role, clientName:state.clientName, id: state.id,
    userName:state.userName, vacations: state.vacations, vacationOnFollow:state.vacationOnFollow,
    vacationsUnFollow:state.vacationsUnFollow };
}; 

const  mapDispatchToProps = dispatch => {  
  return  { 
      Logout: function() { 
        return  dispatch(Logout());
        },
        DataUser: function(){
          return dispatch(DataUser());
        },
        AddFollow:function(vacationID){
          return dispatch(AddFollow(vacationID));
        },
        RemoveFollow:function(vacationID){
          return dispatch(RemoveFollow(vacationID));
        }
  }};
const user = connect(mapStateToProps, mapDispatchToProps)(User);

export default user;
