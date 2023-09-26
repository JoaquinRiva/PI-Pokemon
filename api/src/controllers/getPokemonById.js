const axios = require("axios");

async function getPokemonById(req, res) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const {id} = req.params;
    const {data} = await axios.get(`${URL}${id}`);

    const pokemon = {
      id: data.id,
      name: data.name,
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

module.exports = getPokemonById;