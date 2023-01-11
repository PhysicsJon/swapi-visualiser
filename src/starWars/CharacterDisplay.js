import React, { Component } from 'react'
import { fetchCharacter } from '../api/swapiRequests'
import CharacterView from './CharacterView';

export default class CharacterDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            character: null,
            id: 1
        };
    }
    
    async componentDidMount(){
        const response = await fetchCharacter(this.state.id);
        this.setState({ character: response.data });
    }

    onIdChange = (event) =>{
        this.setState({id: event.target.valueAsNumber})
    }

    onCharacterChoice = async (event) => {
        event.preventDefault();
        const character = await fetchCharacter(this.state.id);
        this.setState({ character: character.data });
    }
    render() {
        return (
            <div>
            <form onSubmit={this.onCharacterChoice}>
                <input type="number" value={this.state.id} onChange={this.onIdChange} />
                <input type="submit" value="Submit" />
            </form>
            {this.state.character !== null ? <CharacterView character={this.state.character} /> : null}
            </div>

        );
    }
}
