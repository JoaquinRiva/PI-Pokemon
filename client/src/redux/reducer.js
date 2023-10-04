import { GET_POKEMON_BY_NAME, GET_POKEMONS } from "./actions-types";

const initialState = {
    pokemons: [],
    allPokemons: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){

        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        
            case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: [action.payload, ...state.pokemons]
            }
            
                
            default:
                return state
    }
}


export default reducer