const axios = require("axios");
const { Pokemon } = require("../db")

async function getPokemonByName(req, res) {
   const URL = "https://pokeapi.co/api/v2/pokemon/";
   try {
    const { name } = req.query;
    const { data } = await axios.get(`${URL}${name}`);
    const pokemon = {
        name: data.name,
        id: data.id,
        image: data.image,
        hp: data.hp,
        attack: data.attack,
        defense: data.defense, 
      };
  
      pokemon.name
        ? res.status(200).json(pokemon)
        : res.status(404).json({message: error.message});
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }



module.exports = getPokemonByName;