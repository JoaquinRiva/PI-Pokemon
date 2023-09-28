const axios = require("axios");
const { Type } = require("../db")

async function getTypes(req, res){
    const URL = "https://pokeapi.co/api/v2/type";
    try {
    const response = await axios.get(URL);
    const typeData = response.data.results;

    const typeNames = typeData.map(type => type.name);

    for (const typeName of typeNames) {
      const existingType = await Type.findOne({
        where: { name: typeName }
      });

      if (!existingType) {
        await Type.create({ name: typeName });
      }
    }

    const typesDb = await Type.findAll();

    res.status(200).json(typesDb);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getTypes;