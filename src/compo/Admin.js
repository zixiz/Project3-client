import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminHome from './AdminHome';
import AdminReports from './AdminReports';
import {UploadVacation,Logout} from '../state/actions';



class Admin extends Component {
  state = {
    destination:"",
    description:"",
    image:"",
    start_date:"",
    end_date:"",
    price:"",
    msg:""
  }

  setImgTo64(ev){
    let file = ev.target.files[0];
    if (file.type == "image/jpeg"){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({image:reader.result,msg:""});
      }
    }else{
      this.setState({msg:"Image must be jpeg type"});
    }
  }

  sendToLogout(){
    this.props.logout();
  }

  handleText(ev)
  {
    this.setState({[ev.target.name]:ev.target.value});
  }

  uploadVacation(){
    if(this.state.image==="" || this.state.destination===""||this.state.description===""||this.state.price===""||this.state.start_date===""){
      this.setState({msg:"All inputs are required"})
    }else{
      this.props.UploadVacation(this.state);
      window.$('#uploadModal').modal('hide');
    }
  }

  render() {
    
    return (
      <Router>
        <div className="row">
          {/* modal */}
          <div class="modal fade" id="uploadModal" role="dialog">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Add Vacation </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                  <div class="modal-body">
                    <div className="row mt-2">
                      <div className="col"> 
                        <input type="text" class="form-control" placeholder="Destination" name="destination" onChange={this.handleText.bind(this)}></input>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col"> 
                        <input type="text" class="form-control" placeholder="Description" name="description" onChange={this.handleText.bind(this)}></input>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col"> 
                        <input type="date" class="form-control" placeholder="Start Date" name="start_date" onChange={this.handleText.bind(this)}></input>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col"> 
                        <input type="date" class="form-control" placeholder="End Date" name="end_date" onChange={this.handleText.bind(this)}></input>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col"> 
                        <input type="number" class="form-control" placeholder="Price in $" name="price" onChange={this.handleText.bind(this)}></input>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col"> 
                        <input type="file" class="form-control" onChange={this.setImgTo64.bind(this)}></input>
                        <span class="badge badge-warning">jpeg only</span>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col"> 
                      <span class="badge badge-warning">{this.state.msg}</span>
                      </div>
                    </div>
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" onClick={this.uploadVacation.bind(this)} class="btn btn-primary">Upload</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <h2>Hello {this.props.clientName}</h2>
            <span class="badge badge-primary">Admin</span>
          </div>
          <div className="col-8">
            <button className="btn-nav btn-links"><Link className="btn btn-primary" to="/allvacations">Vacations</Link></button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#uploadModal">Add vacation</button>
            <button className="btn-nav btn-links"><Link className="btn btn-primary" to="/reports">Reports</Link></button>
            <button onClick={this.sendToLogout.bind(this)} className="btn-nav btn btn-links btn-primary">Logout</button>
          </div>
          <Route exact path="/" component={AdminHome} />

          <Route path="/allvacations" component={AdminHome} />

          <Route path="/reports" component={AdminReports} />
        </div>
      </Router> 
    );
  }
}

const mapStateToProps = state => { 
  return {userName:state.userName,clientName:state.clientName};
}; 

const  mapDispatchToProps = dispatch => {  
  return  { 
    UploadVacation: function(vacationObj) { 
      return  dispatch(UploadVacation(vacationObj));
      },
    logout:function(){
      return dispatch(Logout())
    }
      }
  };
const admin = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default admin;
