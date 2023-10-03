import { useState } from "react";
import {useDispatch} from "react-redux";
import { getPokemonByName } from "../redux/actions";

export default function SearchBar() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const handleSearch = ()=> {
        dispatch(getPokemonByName(name))
    }
    return(
        <div>
            <input 
            type="search"
            value={name}
            onChange={(event=> setName(event.target.value))}
            
            placeholder="Buscar Pokemon" 
            />
            <div>
              <button onClick={handleSearch}>Buscar</button>  
            </div>
            
                
            
        </div>
    )
}