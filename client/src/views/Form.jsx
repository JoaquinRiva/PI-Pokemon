import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import validacionForm from "../components/validacionForm";

function Form() {
    
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    type: "",
    hp: 1,
    attack: 1,
    defense: 1,
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validacionForm({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const sendPokemons = async (event) => {
    event.preventDefault();
    console.log({ ...formData });

    try {
      const response = await axios.post(
        "http://localhost:3001/pokemon/",
        formData
      );
      console.log(`response is ${response}`);

      if (response.data) {
        navigate(`/detail/${response.data.id}`);
      } else {
        console.log("error: id");
      }
    } catch (error) {
      console.log("error: create", error);
    }
  };

  const allow = !formData.name || !formData.image || !formData.type || !formData.hp || !formData.attack || !formData.defense ||  errors.name || errors.type || errors.hp || errors.attack || errors.defense ? false : true;

  return (
    <form onSubmit={sendPokemons}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      {errors.name && <p>{errors.name}</p>}

      <label htmlFor="hp">HP:</label>
      <input
        type="number"
        name="hp"
        onChange={handleChange}
        value={formData.hp}
      />
      {errors.hp && <p>{errors.hp}</p>}

      <label htmlFor="attack">attack:</label>
      <input
        type="number"
        name="attack"
        onChange={handleChange}
        value={formData.attack}
      />
      {errors.attack && <p>{errors.attack}</p>}

      <label htmlFor="defense">Defense</label>
      <input
        type="number"
        name="defense"
        onChange={handleChange}
        value={formData.defense}
      />
      {errors.defense && <p>{errors.defense}</p>}


      <label htmlFor="type">type:</label>
      <input
        type="text"
        name="type"
        onChange={handleChange}
        value={formData.type}
      />
     {errors.type && <p>{errors.type}</p>}


      <label htmlFor="image">Image:</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={formData.image}
      />
     {errors.image && <p>{errors.image}</p>}


      <button type="submit" disabled={!allow}>Crear</button>
    </form>
  );
}

export default Form;