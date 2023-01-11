import React from 'react'
import SpeciesView from './SpeciesView';
import VehicleDisplay from './VehicleDisplay';
import StarshipView from './StarshipView';

export default function CharacterView(props) {
    const character = props.character;
    if (character === null){
        return null;
    }
  return (
    <div>
        <h2>Character Details</h2>
        <h3>{character.name}</h3>
        { character.species.map(race => <SpeciesView species={race} key={race}/>) }
        <p>Gender: {character.gender}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Hair Colour: {character.hair_color}</p>
        <p>Skin Colour: {character.skin_color}</p>
        <p>Height: {Number(character.height)/100}m</p>
        <p>Mass: {character.mass}kg</p>
        
        { character.starships.length > 0 ? 
            <div>
                <hr/>
                <h2>Starships</h2>
                {character.starships.map(starship => <StarshipView starship={starship} key={starship}/>)}
            </div> : null }
        
        {character.vehicles.length > 0 ? 
        <div>
            <hr/>
            <h2>Vehicles</h2>
            {character.vehicles.map(vehicle => <VehicleDisplay vehicle={vehicle} key={vehicle}/>)}
        </div> : null }
    </div>
  )
}
