import React, { Component } from 'react'
import { fetchVehicles } from '../api/swapiRequests';

export default class VehicleDisplay extends Component {
    constructor(props){
        super(props);

        const params = new URL(props.vehicle).pathname.split('/');
        const id = params[params.length-2];
        this.state = {
            vehicleId: id,
            vehicle: null
        };
    }

    async componentDidMount(){
        const vehicle = await fetchVehicles(this.state.vehicleId);
        this.setState({vehicle: vehicle.data});
    }

  render() {
    if(this.state.vehicle === null){
        return null
      }
    return (
        <div>
            <h3>{this.state.vehicle.name}</h3>
        </div>
    )
  }
}
