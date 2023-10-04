const axios = require("axios");
const { Router } = require('express');
const getTypes = require("../controllers/getTypes")
const getPokemonById = require("../controllers/getPokemonById")
const getPokemonByName = require("../controllers/getPokemonByName")
const postPokemon = require('../controllers/postPokemon')
const { Pokemon } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons', async (req, res) => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=30";
    const response = await axios.get(url);
    const pokemonData = response.data.results;

    const pokemons = await Promise.all(
      pokemonData.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const data = pokemonResponse.data;
        return {
          id: data.id,
          name: data.name,
          type: data.types[0].type.name,
          image: data.sprites.front_default,
          hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
          attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
          defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
        };
      })
    );

    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
  
  router.get('/pokemon/:id', getPokemonById);
  router.get('/pokemon', getPokemonByName);
  router.get('/types', getTypes);
  router.post('/pokemon',postPokemon);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
