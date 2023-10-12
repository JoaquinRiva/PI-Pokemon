import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { orderCards, orderByType, filterAlphabetically, resetFilter } from "../redux/actions"
import { useState } from "react"
import {getTypes} from "../redux/actions"
import "./SearchBar.css"


const Filters = ()=>{
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

    const [aux, setAux] = useState(false)

    const types = useSelector(state => state.types);
    

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleType = (event)=>{
        dispatch(orderByType(event.target.value))
        setAux(true)
        console.log(event.target.value)
    }
    const handleAlphabeticalFilter = (event) => {
        const filterValue = event.target.value; 
        dispatch(filterAlphabetically(filterValue));
      };

    const handleResetFilter = ()=>{
        dispatch(resetFilter())
    }

    return(
        <div>
             <select onChange={handleAlphabeticalFilter}>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>

            <select onChange={handleType}>
            {types.map((pokemonType) => (
                 <option key={pokemonType} value={pokemonType}> {pokemonType}
    </option>
  ))}
</select>
            
        <select onChange={handleOrder}>
            <option value="upwards">Up to Down</option>
            <option value="downwards">Down to Up</option>
            <option value="attack">attack</option>
        </select>

        <button className="boton" onClick={handleResetFilter}>reset filters</button>
        
        </div>
       
    )
}

export default Filters