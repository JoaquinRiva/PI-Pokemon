const axios = require("axios");
const { Pokemon, Type} = require("../db");

async function getPokemonById(req, res) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const { id } = req.params;

    if (!isNaN(id)) {
      
      const { data } = await axios.get(`${URL}${id}`);

      const pokemon = {
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        image: data.sprites.front_default,
        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
        defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
      };

      res.status(200).json(pokemon);
    } else {
     
      const result = await getPokemonFromDatabase(id)
      res.status(200).json(result)
    };

      
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  async function getPokemonFromDatabase(id){
    const searchDb = await Pokemon.findByPk(id)
    return searchDb
}

module.exports = getPokemonById;