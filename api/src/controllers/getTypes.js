const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";
const { Type } = require("../db")

async function getTypes(req, res) {
    try {
       
        const isEmpty = await Type.count() === 0;

        if (isEmpty) {
        
            const response = await axios(URL);
            const data = response.data;

            const pokemonTypes = [];
            data.results.forEach(pokemonType => {
                pokemonTypes.push(pokemonType.name);
            });

           
            await savePokemonTypesToDatabase(Object.values(pokemonTypes));
        }

       
        const typesFromDatabase = await Type.findAll({
            attributes: ['name'],
            // raw: true, 
        });

        
        const typesObject = [];
        typesFromDatabase.forEach(type => {
            typesObject.push(type.name);
        });

        res.status(200).json(typesObject);
    } catch (error) {
        res.status(500).json({ error: "error", details: error.message });
    }
}

async function savePokemonTypesToDatabase(types) {
    try {
        for (const type of types) {
            await Type.create({ name: type });
        }
        console.log('Tipo guardado!');
    } catch (error) {
        console.error('Error al guardar tipo', error);
    }
}





module.exports = getTypes