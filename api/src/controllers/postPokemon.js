const { Pokemon, Type } = require("../db");

async function postPokemon(req, res) {
  try {
    const { name, image, hp, attack, defense, types } = req.body;

    if (!name || !image || !hp || !attack || !defense ) {
      return res.status(400).json({ message: "Faltan datos obligatorios." });
    }

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      types
      
    });

    if (types && types.length > 0) {
      const typeRecords = await Type.findAll({ where: { name: types } });
      await newPokemon.addTypes(typeRecords);
    }

    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = postPokemon;