const axios = require("axios");
const { Router } = require('express');
const getPokemonById = require("../controllers/getPokemonById")
const getPokemonByName = require("../controllers/getPokemonByName")
const { Pokemon } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get('/pokemons', async (req, res) => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const pokemons = response.data.results;
      res.status(200).json(pokemons);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get('/pokemons/:id', getPokemonById);
  router.get('/pokemons/name?=', getPokemonByName);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
