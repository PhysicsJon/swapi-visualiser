import React, { Component } from 'react'
import { fetchStarships } from '../api/swapiRequests';

export default class StarshipView extends Component {
    constructor(props){
        super(props);

        const params = new URL(props.starship).pathname.split('/');
        const id = params[params.length-2];
        this.state = {
            starshipId: id,
            starship: null
        };
    }

    async componentDidMount(){
        const starship = await fetchStarships(this.state.starshipId);
        this.setState({starship: starship.data});
    }

  render() {
    if(this.state.starship === null){
      return null
    }
    return (
      <div>
        <h3>{this.state.starship.name}</h3>
      </div>
    )
  }
}
