const axios = require("axios");
const { Pokemon } = require("../db")

async function getPokemonByName(req, res) {
   const URL = "https://pokeapi.co/api/v2/pokemon/";
   try {
    const { name } = req.query;
    const minName = name.toLowerCase(); 
    const dbPokemon = await Pokemon.findOne({
      where: { name: minName },
    });

    if (dbPokemon) {
      res.status(200).json(dbPokemon);
    } else {
      const apiUrl = `${URL}${minName}`;
      const { data } = await axios.get(apiUrl);

      if (data) {
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
        res.status(404).json({ message: "Pokémon no encontrado" });
      }
    }
  } catch (error) {
    res.status(500).json({ error:error.message });
  }
}


module.exports = getPokemonByName;