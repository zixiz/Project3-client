import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DataAdmin,DeleteVacation,UpdateVacation} from '../state/actions';
import io from 'socket.io-client';


class AdminHome extends Component {
  state = {
    destination:"",
    description:"",
    image:"",
    start_date:"",
    end_date:"",
    price:"",
    msg:""
  }

    componentDidMount(){
      this.props.dataAdmin();
      const socket=io("http://localhost:8888");
      socket.on("connect",function(){
        console.log("connected");
    });
    }

    sendToDelete(vacationID,ev){
        this.props.deleteVacation(vacationID);
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

    handleText(ev)
    {
      this.setState({[ev.target.name]:ev.target.value});
    }

    sendToUpdate(){
      let objForUpdate = {
        vacationId:this.state.vacationId,
        destination:this.state.destination,
        description:this.state.description,
        start_date:this.state.start_date,
        end_date:this.state.end_date,
        price:this.state.price,
        image:this.state.image
      }
      this.props.updateVacation(objForUpdate);
      window.$('#edit-modal').modal('hide');
    }

    updateState(id,destination,description,start_date,end_date,price,image){
      this.setState({
        vacationId:id,
        destination:destination,
        description:description,
        start_date:start_date,
        end_date:end_date,
        price:price,
        image:image
      });
      
    }
  
    render() {
      return (
         <div className="container-fluid"> 
         <div className="row">
            {/* Edit modal */}
          <div class="modal fade" id="edit-modal" role="dialog">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Edit Vacation</h5>
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
                  <button type="button" onClick={this.sendToUpdate.bind(this)}  class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
         </div>
          <div className="row mt-3">
            <div className="col">
                {this.props.adminvacations.map(v=>{
                    return(
                        <div key={v.id} className="card" style={{ width: "18rem" }}>
                        <div>
                          <button type="button"  className="fas fa-edit edit-icon btn btn-light" onClick={this.updateState.bind(this,v.id,v.destination,v.description,v.start_date,v.end_date,v.price,v.image)}  data-toggle="modal" data-target="#edit-modal"></button>
                          <button type="button"  className="fas fa-trash-alt btn btn-light" onClick={this.sendToDelete.bind(this,v.id)}></button>
                        </div>
                        <img src={v.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{v.destination}</h5>
                          <p className="card-text">{v.description}</p>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              <p><label className="fas fa-plane-departure plane-icon"></label>{v.start_date}</p>
                              <p><label className="fas fa-plane-arrival plane-icon"></label>{v.end_date}</p>
                            </li>
                            <li className="list-group-item">{v.price}<label className="fas fa-dollar-sign dollar-icon"></label></li>
                            <li className="list-group-item"><label className="fas fa-eye eye-icon">{v.followers}</label></li>
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
  
  const mapStateToProps = state => { 
    return { adminvacations:state.adminvacations,id:state.id,role:state.role,clientName:state.clientName,userName:state.userName};
  }; 
  
  const  mapDispatchToProps = dispatch => {  
    return  { 
        dataAdmin:function(){
            return dispatch(DataAdmin())
        },
        deleteVacation:function(vacationId){
            return dispatch(DeleteVacation(vacationId))
        },
        updateVacation:function(form){
          return dispatch(UpdateVacation(form))
        }
        }
    };
  const adminHome = connect(mapStateToProps, mapDispatchToProps)(AdminHome);
  
  export default adminHome;
  