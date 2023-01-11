import React, { Component } from 'react'
import { fetchSpecies } from '../api/swapiRequests';

export default class SpeciesView extends Component {
    constructor(props){
        super(props);
        const params = new URL(props.species).pathname.split('/');
        const id = params[params.length-2];
        this.state = {
            speciesId: id,
            species: null
        };
    }

    async componentDidMount(){
        const species = await fetchSpecies(this.state.speciesId);
        this.setState({species: species.data});
    }
  render() {
    if(this.state.species === null){
        return null;
    }
    
    return (
        <div>
            <h3>{this.state.species.name}</h3>
        </div>
    )
  }
}
