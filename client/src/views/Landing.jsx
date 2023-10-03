import pokegif from "../assets/pokemon.gif"
import "../views/Landing.modules.css"
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";


function Landing() {
    return(
        <div>
            <h1>Soy el landing</h1>
        <img className="gif" src={pokegif} alt="Pokegif"/>
        <Link to="/home">HomePage</Link>
        <SearchBar />

        </div>
    )
}

export default Landing;