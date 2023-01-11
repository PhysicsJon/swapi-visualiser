import axios from 'axios';

export async function fetchCharacter(id) {
  try{
    const response = await axios.get(`${process.env.REACT_APP_SWAPI_URL}/people/${id}`);
    return response;
  }
  catch(error){
      console.error(error);
  }
}

export async function fetchSpecies(id){
    try{
        const response = await axios.get(`${process.env.REACT_APP_SWAPI_URL}/species/${id}`);
        return response;
      }
      catch(error){
          console.error(error);
      } 
}

export async function fetchVehicles(id){
    try{
        const response = await axios.get(`${process.env.REACT_APP_SWAPI_URL}/vehicles/${id}`);
        return response;
      }
      catch(error){
          console.error(error);
      } 
}

export async function fetchStarships(id){
    try{
        const response = await axios.get(`${process.env.REACT_APP_SWAPI_URL}/starships/${id}`);
        return response;
      }
      catch(error){
          console.error(error);
      } 
}

export async function fetchPlanet(id){
    try{
        const response = await axios.get(`${process.env.REACT_APP_SWAPI_URL}/planets/${id}`);
        return response.data;
      }
      catch(error){
          console.error(error);
      } 
}
