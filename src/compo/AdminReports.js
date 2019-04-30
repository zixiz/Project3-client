import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DataAdmin} from '../state/actions';
var Chart = require('chart.js');

class AdminReports extends Component {
    componentDidMount(){
      this.props.dataAdmin();
      this.createChart();
    }
    
    createChart(){
    let vacationfollowers = this.props.adminvacations.filter(v => v.followers != 0);
    let labelsArry = [];
    let NumOfFollowers = [];

    for (let i = 0; i < vacationfollowers.length; i++) {

      labelsArry.push(`${vacationfollowers[i].destination} ID:${vacationfollowers[i].id}`);

      NumOfFollowers.push(vacationfollowers[i].followers);

    }

    var ctx = document.getElementById('myChart').getContext('2d');

    var stackedBar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsArry,
        datasets: [{
          label: 'Followers',
          data: NumOfFollowers,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
    }

    render() {
      return (
          <div className="row mt-3">
              <canvas id="myChart" width="600" height="600" className="canvas"></canvas>
          </div>
      );
    }
  }
  
  const mapStateToProps = state => { 
    return { adminvacations: state.adminvacations};
  }; 
  
  const  mapDispatchToProps = dispatch => {  
    return  { 
        dataAdmin:function(){
          return dispatch(DataAdmin())
          }
        }
    };
  const adminReports = connect(mapStateToProps, mapDispatchToProps)(AdminReports);
  
  export default adminReports;
  