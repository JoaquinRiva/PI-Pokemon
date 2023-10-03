import { GET_POKEMONS, GET_POKEMON_BY_NAME } from "./actions-types";
import axios from "axios";

export const getPokemons = ()=> async(dispatch)=>{
    try {
        const response = await axios('http://localhost:3001/pokemons')
        const pokemons = response.data
        console.log(pokemons)

        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
    } catch (error) {
        window.alert(error)
    } 
}


export const getPokemonByName = (name)=> async (dispatch)=>{
    try {
        const response = await axios(`http://localhost:3001/pokemon/?name=${name}`)
        const pokemonData = response.data
        console.log(pokemonData)

        dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: pokemonData
        })
    } catch (error) {
        window.alert(error)
    }
}