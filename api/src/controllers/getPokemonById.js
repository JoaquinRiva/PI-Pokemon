const axios = require("axios");

async function getPokemonById(req, res) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const { id } = req.params;

    if (!isNaN(id)) {
      
      const { data } = await axios.get(`${URL}${id}`);

      const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
        defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
      };

      res.status(200).json(pokemon);
    } else {
     
      const dbPokemon = await Pokemon.findOne({
        where: { nombre: id.toLowerCase() },
      });

      if (dbPokemon) {
        res.status(200).json(dbPokemon);
      } else {
        res.status(404).json({ message: error.message });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemonById;