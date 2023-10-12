import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { getPokemons } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Paginacion } from "../components/Paginacion";
import "./Home.css"


function Home() {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(12);
  const maximo = pokemons.length / porPagina

  useEffect(()=>{
    dispatch(getPokemons())
    
  },[])


  return(
    <div>
      <NavBar />
    <div className="div">    
      {
      pokemons
      .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
      .map(pokemon => {
              return (
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.type}
                  hp={pokemon.hp}
                  attack={pokemon.attack}
                  defense={pokemon.defense}
                />
              )
            })
          }
    <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>
    </div>
 </div>
  )
}  

export default Home;
