import pokegif from "../assets/pokemon.gif"
import "../views/Landing.css"
import { Link } from "react-router-dom";


function Landing() {
    return(
        <div className="">
            <h1 className="tittle">Pokedex</h1>
        <img className="gif" src={pokegif} alt="Pokegif"/>
        <Link to="/home">HomePage</Link>
        

        </div>
    )
}

export default Landing;