import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Detail (){
    const { id } = useParams()
    console.log(id);
    const [pokemons, setPokemons] = useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/pokemon/${id}`)
        .then(({data})=>{
            console.log(data)
            if(data.name){
                setPokemons(data)
            } else {
                window.alert("error")
            }
        })
        return setPokemons({})
    },[id])
    
    return(
        <div>
            <Link to='/home'>
            <button>Home</button>
            </Link>
            <div>
                <h2>ID: {pokemons.id}</h2>
                <img src={pokemons.image} alt={pokemons.name}/>
            </div> 
            <h2>NAME :{pokemons.name}</h2>
            <h2>HP: {pokemons.hp}</h2>
            <h2>attack: {pokemons.attack}</h2>
            <h2>defense: {pokemons.defense}</h2>
            <h2>Type: {pokemons.type} </h2>
        </div>
    )
}


export default Detail;
