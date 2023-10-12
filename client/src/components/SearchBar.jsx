import { useState } from "react";
import {useDispatch} from "react-redux";
import { getPokemonByName } from "../redux/actions";
import "./SearchBar.css"

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
              <button className="boton" onClick={handleSearch}>Buscar</button>  
            </div>
            
                
            
        </div>
    )
}