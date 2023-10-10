import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, ORDER, ORDER_BY_TYPE, FILTER_ALPHABETICALLY, RESET_FILTER } from "./actions-types";
import axios from "axios";

export const getPokemons = () => async(dispatch) => {
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


export const getPokemonByName = (name)=> async (dispatch) => {
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

export const getTypes = () => async(dispatch) => {
    try {
        const response = await axios(`http://localhost:3001/types`)
        const Typedata = response.data

        dispatch({
            type: GET_TYPES,
            payload: Typedata
        })
    } catch (error) {
        window.alert(error)
    }
}

export const orderCards = (order)=>{
    return {
        type: ORDER,
        payload: order
    }
}

export const orderByType = (type)=>{
    return {
        type: ORDER_BY_TYPE,
        payload: type
    }
}

export const filterAlphabetically = (filterValue)=>({
    type: FILTER_ALPHABETICALLY,
    payload: filterValue
})

export const resetFilter = ()=>({
    type: RESET_FILTER
})