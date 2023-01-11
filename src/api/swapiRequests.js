import axios from 'axios';

export const fetchCharacter = async (id) => await getApi(`people/${id}`);

export const fetchSpecies = async (id) => await getApi(`species/${id}`);

export const fetchVehicles = async (id) => await getApi(`vehicles/${id}`);

export const fetchStarships = async (id) => await getApi(`starships/${id}`);

export const fetchPlanet = async (id) =>  await apiGet(`planets/${id}`);

const apiGet = async (endpoint) => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_SWAPI_URL}/${endpoint}`);
        return response.data;
      }
      catch(error){
          console.error(error);
      }
}
