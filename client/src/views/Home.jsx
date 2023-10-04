import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { getPokemons, getTypes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Paginacion } from "../components/Paginacion";


function Home() {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(12);
  const maximo = pokemons.length / porPagina

  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
  },[])


  return(
    <div>
      <SearchBar />
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
  )
}  

export default Home;
